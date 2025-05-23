import { BrowserRouter, Routes, Route } from 'react-router'
import { HelmetProvider } from 'react-helmet-async'
import { Provider } from "react-redux";


import './App.css';
import Home from './pages/Home'
import Product from './pages/Product';
import Category from './pages/Category'
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="products">
        <Route path="category/:categoryName" element={<Category />} />
        <Route path="id/:productId" element={<Product />} />
      </Route>
    </Routes>
  </BrowserRouter>  
  </Provider>);
}

export default App;
