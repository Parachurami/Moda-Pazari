import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from './pages/home-page/HomePage';
import Login from './pages/login-page/Login'
import ProductDetail from './pages/product-details/ProductDetail';
import Checkout from './pages/checkout-page/Checkout.jsx';
import CartProvider from './context/CartProvider.js';
import {SnackbarProvider}from 'notistack'
function App() {
  return (
    <div className="App">
      <SnackbarProvider maxSnack={3}>
        <CartProvider>
          <BrowserRouter>
              <Routes>
                  <Route path={'/'} element={<HomePage/>}/>
                  <Route path={'/login'} element={<Login/>}/>
                  <Route path='/productDetail' element={<ProductDetail/>}/>
                  <Route path='/checkout' element={<Checkout/>}/>
              </Routes>
          </BrowserRouter>
        </CartProvider>
      </SnackbarProvider>
    </div>
  );
}

export default App;
