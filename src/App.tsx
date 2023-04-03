import { Route, Routes } from 'react-router-dom';
import Template from './components/template';
import AdminPage from './components/views/admin';
import Cart from './components/views/cart';
import ProductDetail from './components/views/product-detail';
import ProductList from './components/views/product-list';

function App() {
  return (
    <Template>
      <Routes>
        <Route path='/' element={<ProductList />} />
        <Route path='/product/:id' element={<ProductDetail />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/admin' element={<AdminPage />} />
      </Routes>
    </Template>
  );
}

export default App;
