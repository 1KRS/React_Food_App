import Header from './components/Header';
import Meals from './components/Catalog';
import { CartContextProvider } from './store/cartContext';
import { UserActionsContextProvider } from './store/userActionsContext';
import Cart from './components/Cart';
import Checkout from './components/Checkout';

function App() {
  return (
    <UserActionsContextProvider>
      <CartContextProvider>
        <Header />
        <Meals />
        <Cart />
        <Checkout />
      </CartContextProvider>
    </UserActionsContextProvider>
  );
}

export default App;
