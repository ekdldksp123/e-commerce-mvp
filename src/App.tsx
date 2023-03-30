import { Route, Routes } from 'react-router-dom';
import Hello from '~/components/Hello';
import Template from './components/template';
import ProductList from './components/views/product-list';

function App() {
  return (
    <Template>
      <Routes>
        <Route path='/' element={<ProductList />} />
      </Routes>
    </Template>
  );
}

export default App;
