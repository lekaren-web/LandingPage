package main

import (
	"encoding/json"
	"fmt"
	"net/http"
	"strconv"

	"app/product"
)

func main() {
	getProductHandler := http.HandlerFunc(getProducts)
	http.Handle("/products", getProductHandler)
	http.ListenAndServe(":9090", nil)
}

func getProducts(w http.ResponseWriter, r *http.Request) {
	mpg := product.MockProductGetter{}
	repo := product.GetRepo(mpg)

	enableCors(&w)
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)

	query := r.URL.Query()
	filters, present := query["id"]
	if !present || len(filters) == 0 {
		fmt.Println("return all products")
		p := repo.GetAllProducts()
		json.NewEncoder(w).Encode(p)
	} else {
		id, _ := strconv.ParseUint(filters[0], 10, 16)
		p := repo.GetById(uint16(id))
		json.NewEncoder(w).Encode(p)
	}
}

func enableCors(w *http.ResponseWriter) {
	(*w).Header().Set("Access-Control-Allow-Origin", "*")
}
