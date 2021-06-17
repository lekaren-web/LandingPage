package product

type Product struct {
	Id          uint16 `json:"id"`
	Title       string `json:"title"`
	Description string `json:"description"`
	Price       uint32 `json:"price"`
	Img_url     string `json:"img_url"`
}
