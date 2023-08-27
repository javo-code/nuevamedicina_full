import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './components/context/CartContext'; 
import NavBar from './components/navBar/NavBar';
import Footer from './components/footer/Footer';
import Cart from './components/cart/Cart';
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import CategoryListContainer from './components/categoryListContainer/CategoryListContainer';
import Checkout from './components/checkout/Checkout';
import CartModal from './components/cartModal/CartModal';
import CheckoutForm from './components/checkoutForm/CheckoutForm';
import Login from './components/login/Login';
import TestConsulta from './components/testConsulta/TestConsulta';

//import Acount from './components/acount/Acount'

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <NavBar />  
        <CartProvider>
          <Routes>
            <Route path='/' element={<CategoryListContainer />} />
            <Route path='/all' element={<ItemListContainer/>} greeting={'BIENVENID@S!'}/>
            <Route path='/test' element={<TestConsulta />} />
        {/*<Route path='/category/:categoryId' element={<CategoryListContainer />} /> */}
            <Route path='/item/:itemId' element={<ItemDetailContainer />} />
            <Route path='/login' element={<Login />} />
            {/* <Route path='/acount' element={<Acount />} /> */}
            <Route path='/cart' element={<Cart />} />
            <Route path='/cartModal' element={<CartModal />} />
            <Route path='/checkoutform' element={<CheckoutForm />} />
            <Route path='/checkout' element={<Checkout />} />
          </Routes>
        </CartProvider>
        <Footer /> 
      </BrowserRouter>
    </div>
  );
}

export default App;