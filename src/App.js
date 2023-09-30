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
import CheckoutForm from './components/checkoutForm/CheckoutForm';
import Login from './components/login/Login';
import ProfessionalServs from './components/professionalServs/ProfessionalServs'
import Nutrition from './components/nutrition/Nutrition'
import Deponsables from './components/deponsables/Deponsables'
import Bombs from './components/bombs/Bombs'

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path='/all' element={<ItemListContainer/>} greeting={'BIENVENID@S!'}/>
            <Route path='/' element={<CategoryListContainer />} />
            <Route path='/servicios' element={<ProfessionalServs />} />
            <Route path='/nutricion' element={<Nutrition />} />
            <Route path='/descartables' element={<Deponsables />} />
            <Route path='/bombas' element={<Bombs />} />
            <Route path='/item/:itemId' element={<ItemDetailContainer />} />
            <Route path='/login' element={<Login />} />
            <Route path='/cart' element={<Cart />} />
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