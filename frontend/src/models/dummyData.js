
// import image1 from "C:/Users/steph/Documents/coding/React-html projects/Moda-Pazari/frontend/src/assets/images/male/Abomasnow Men's Crew Neck Classical Short Sleeve Tee.jpg";
import image2 from "C:/Users/steph/Documents/coding/React-html projects/Moda-Pazari/frontend/src/assets/images/male/Adult Polyester Spandex Short Sleeve Compression.jpg";
import image3 from "C:/Users/steph/Documents/coding/React-html projects/Moda-Pazari/frontend/src/assets/images/male/Allrj Oversized Solid Color Pullover Hoodie Sweatshirt - Blue _ XL.jpg";
import image4 from "C:/Users/steph/Documents/coding/React-html projects/Moda-Pazari/frontend/src/assets/images/male/Cropped T-Shirt.jpg";
import image5 from "C:/Users/steph/Documents/coding/React-html projects/Moda-Pazari/frontend/src/assets/images/male/Dwaogom Men's Relaxation Sport Hooded Pullover Sweatshirt Long Sleeve Solid Hoodie, Size_Large, Multicolor.jpg";
import image6 from "C:/Users/steph/Documents/coding/React-html projects/Moda-Pazari/frontend/src/assets/images/male/Espionage Plain Sleeveless T-Shirt.jpg";
import image7 from "C:/Users/steph/Documents/coding/React-html projects/Moda-Pazari/frontend/src/assets/images/male/Fashion Hoodies Male Casual Hoodies Sweatshirts Solid Sweatshirt - Navy blue hoodie _ M.jpg";
import image8 from "C:/Users/steph/Documents/coding/React-html projects/Moda-Pazari/frontend/src/assets/images/male/Gildan Heavy Cotton Tank Top.jpg";
import image9 from "C:/Users/steph/Documents/coding/React-html projects/Moda-Pazari/frontend/src/assets/images/male/Gzwyht Mens Tank Tops.jpg";
import image10 from "C:/Users/steph/Documents/coding/React-html projects/Moda-Pazari/frontend/src/assets/images/male/Indefini Mens Cotton Undershirts.jpg";
import image11 from "C:/Users/steph/Documents/coding/React-html projects/Moda-Pazari/frontend/src/assets/images/male/Men's Casual Black Color V Neck Coarse Wool Sweaters Pullover.jpg";
import image12 from "C:/Users/steph/Documents/coding/React-html projects/Moda-Pazari/frontend/src/assets/images/male/Men's Letter Print Hooded Casual Sweatshirt.jpg";
import image13 from "C:/Users/steph/Documents/coding/React-html projects/Moda-Pazari/frontend/src/assets/images/male/Men Contrast Collar Half Button Placket Sweatshirt.jpg";
import image14 from "C:/Users/steph/Documents/coding/React-html projects/Moda-Pazari/frontend/src/assets/images/male/Men Hoodies Solid Color Sweatshirt Male Casual Hoodies Hoodies.jpg";
import image15 from "C:/Users/steph/Documents/coding/React-html projects/Moda-Pazari/frontend/src/assets/images/male/Men Solid Hoodies Autumn Casual Hooded Hip Hop Sports Sweatshirts Streetwear Long Sleeve Plus Size Warm Fleece Male Pullover DARK GREY-S.jpg";
import image16 from "C:/Users/steph/Documents/coding/React-html projects/Moda-Pazari/frontend/src/assets/images/male/Mens Fleece Crewneck Brushed Cotton Sweatshirt.jpg";
import image17 from "C:/Users/steph/Documents/coding/React-html projects/Moda-Pazari/frontend/src/assets/images/male/Mens Hoodie Hooded Sweatshirt Plain Pullover Jumper Hoody Quality Classic Soft.jpg";
import image18 from "C:/Users/steph/Documents/coding/React-html projects/Moda-Pazari/frontend/src/assets/images/male/Next UNISEX - Sweatshirt - black.jpg";
import image19 from "C:/Users/steph/Documents/coding/React-html projects/Moda-Pazari/frontend/src/assets/images/male/Nike MENS Pro.jpg";
import image20 from "C:/Users/steph/Documents/coding/React-html projects/Moda-Pazari/frontend/src/assets/images/male/Nike Sportwear Club Tee.jpg";
import image21 from "C:/Users/steph/Documents/coding/React-html projects/Moda-Pazari/frontend/src/assets/images/male/Printed Alphabet Plus Velvet Sweatshirt Men Fashion Brands Loose Casual Top Sports Pullover Hoodie - Light Grey _ XL.jpg";
import image22 from "C:/Users/steph/Documents/coding/React-html projects/Moda-Pazari/frontend/src/assets/images/male/Rattoyy Tank Shirts.jpg";
import image23 from "C:/Users/steph/Documents/coding/React-html projects/Moda-Pazari/frontend/src/assets/images/male/Rigardu mens body-building shirts.jpg";
import image24 from "C:/Users/steph/Documents/coding/React-html projects/Moda-Pazari/frontend/src/assets/images/male/Selected Homme SLHEMANUEL - Sudadera - black.jpg";
import image25 from "C:/Users/steph/Documents/coding/React-html projects/Moda-Pazari/frontend/src/assets/images/male/Sleefs Basic White Compression Shirt.jpg";
import image26 from "C:/Users/steph/Documents/coding/React-html projects/Moda-Pazari/frontend/src/assets/images/male/Unisex Compression Sleeveless Shirt.jpg";
import Product from "./Product";

const currentImages = [
    // image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
    image16,
    image17,
    image18,
    image19,
    image20,
    image21,
    image22,
    image23,
    image24,
    image25,
    image26,
];


export const availableProducts = [
    ...currentImages.map((image, index) =>{
        return new Product('Shirt', 'black shirt', image, 33.56, 5, false)
    })
]