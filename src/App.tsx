import { Route, Routes } from 'react-router-dom';
import Template from './components/template';
import ProductDetail from './components/views/product-detail';
import ProductList from './components/views/product-list';

function App() {
  return (
    <Template>
      <Routes>
        <Route path='/' element={<ProductList />} />
        <Route path='/product/:id' element={<ProductDetail />} />
      </Routes>
    </Template>
  );
}

export default App;
