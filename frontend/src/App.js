import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from './pages/home-page/HomePage';
import Login from './pages/login-page/Login'
import ProductDetail from './pages/product-details/ProductDetail';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
              <Route path={'/'} element={<HomePage/>}/>
              <Route path={'/login'} element={<Login/>}/>
              <Route path='/productDetail' element={<ProductDetail/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
