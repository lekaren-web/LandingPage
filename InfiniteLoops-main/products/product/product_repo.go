package product

import (
	"fmt"
	"sync"
)

type ProductGetter interface {
	getProducts() []Product
	getProductById(id uint16) Product
}

type ProductRepo struct {
	productGetter ProductGetter
}

type MockProductGetter struct {
}

func (mpg MockProductGetter) getProducts() []Product {
	descriptions := []string{
		"A nice afternoon",
		"Time for something new",
		"How about a book?",
		"Nice music",
		"Surprising!",
		"Get's better each time",
		"About time",
		"Family friendly",
	}

	titles := []string{
		"Lost in the Woods",
		"The Favorite One",
		"Sharks and Aliens II",
		"Before It's Over",
		"Maybe?",
		"Precious Stones",
		"Road to An Intersection",
		"Washing Dishes",
	}
	var products []Product

	for i := uint16(0); i < 8; i++ {
		p := Product{}

		p.Id = i
		p.Description = descriptions[i]
		p.Title = titles[i]
		p.Price = uint32(3 * i)
		p.Img_url = fmt.Sprintf("loop%d.gif", i)

		products = append(products, p)
	}

	return products
}

func (mpg MockProductGetter) getProductById(id uint16) Product {
	p := Product{}

	p.Id = id
	p.Description = "A sample product"
	p.Title = "One Fine Stay"
	p.Price = 1000
	p.Img_url = "loop2.gif"

	return p
}

func (pr ProductRepo) GetAllProducts() []Product {
	return pr.productGetter.getProducts()
}

func (pr ProductRepo) GetById(id uint16) Product {
	p := pr.productGetter.getProductById(id)
	return p
}

func newProductRepo(productGetter ProductGetter) *ProductRepo {
	return &ProductRepo{productGetter}
}

var lock = &sync.Mutex{}

var singleProductRepo *ProductRepo

func GetRepo(productGetter ProductGetter) *ProductRepo {
	if singleProductRepo == nil {
		lock.Lock()
		defer lock.Unlock()

		if singleProductRepo == nil {
			singleProductRepo = newProductRepo(productGetter)
		} else {
			fmt.Println("singleProductRepo already created")
		}
	} else {
		fmt.Println("singleProductRepo already exists")
	}

	return singleProductRepo
}
