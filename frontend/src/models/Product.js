class Product{
    constructor(name, description, image, price, rating, isFavorite, id){
        this.id = id;
        this.name = name;
        this.description = description;
        this.image = image;
        this.price = price;
        this.rating = rating;
        this.isFavorite = isFavorite
    }
}

export default Product;