import AdvertCard from "../../Components/global/advert/AdvertCard";
import Navigation from "../../Components/global/navigation/Navigation";
import FilterContainer from "../../Components/home/filter/FilterContainer";
import Header from "../../Components/home/Header";
import ProductList from "../../Components/home/product-display/product_list/ProductList";
import { availableProducts } from "../../models/dummyData";
import './homePage.css'

const HomePage = () => {
    return (
        <div className="container" style={styles.container}>
            <div className="header">
                <Header/>
                <Navigation/>
            </div>
            <div className="content" style={styles.content}>
                <AdvertCard/>
                <FilterContainer/>
                <ProductList products={availableProducts}/>
            </div>
        </div>
    )
}

export default HomePage;


const styles = {
    container:{
    },
    content:{
        marginLeft:100,
        marginRight:100,
        height:'94%'
    }
}
