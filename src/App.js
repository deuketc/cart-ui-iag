import Navbar from './components/Navbar';
import ProductList from './features/products/ProductList';
import ShoppingCart from './features/shoppingcart/ShoppingCart';
import OrdersList from './features/orders/OrdersList';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './index.css';

const App = () => {
  return (
    <BrowserRouter>
      <div className='App'>
        <Navbar />
        <Switch>
          <Route path='/' exact component={ProductList} />
          <Route path='/cart' component={ShoppingCart} />
          <Route path='/orders' component={OrdersList} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
