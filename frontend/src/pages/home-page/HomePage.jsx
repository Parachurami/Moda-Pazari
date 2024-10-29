// import { useEffect, useState } from "react";
import AdvertCard from "../../Components/global/advert/AdvertCard";
import Navigation from "../../Components/global/navigation/Navigation";
import FilterContainer from "../../Components/home/filter/FilterContainer";
import Header from "../../Components/home/Header";
import ProductList from "../../Components/home/product-display/product_list/ProductList";
import './homePage.css'
// import axios from 'axios'
import { availableProducts } from "../../models/dummyData";

const HomePage = () => {
    // const [availableProducts, setAvailableProducts] = useState([]);
    // const [isLoading, setIsLoading] = useState(true);
    // function getCookie(name){
    //     let cookieValue = null;
    //     if (document.cookie && document.cookie !== '') {
    //         const cookies = document.cookie.split(';');
    //         for (let i = 0; i < cookies.length; i++) {
    //             const cookie = cookies[i].trim();
    //             if (cookie.substring(0, name.length + 1) === (name + '=')){
    //                 cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
    //                 break;
    //             }
    //         }
    //     }
    //     return cookieValue;
    // }
    // const csrftoken = getCookie('csrftoken');

    // console.log('token: ',csrftoken)

    // axios.defaults.headers.common['X-CSRFToken'] = csrftoken;

    // axios.defaults.withCredentials = true;
    // const loadData = async() =>{
    //     try{
    //         const result = await axios.get('http://192.168.0.160:8000/products/products/');
    //         if(result != null){
    //             console.log(result.data)
    //             setAvailableProducts(result.data)
    //         }
    //     }catch(err){
    //         console.log(err)
    //     }
    //     finally{
    //         setIsLoading(false);
    //     }

    // }

    // useEffect(() =>{
    //     loadData()
    // },[availableProducts])

    // if(isLoading){
    //     return <div>
    //         <p>Loading...</p>
    //     </div>
    // }
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
