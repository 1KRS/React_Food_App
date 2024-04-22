import Header from './components/Header';
import Meals from './components/Catalog';
import { CartContextProvider } from './store/cartContext';
import { UserActionsContextProvider } from './store/userActionsContext';
import Cart from './components/Cart';

function App() {
  return (
    <UserActionsContextProvider>
      <CartContextProvider>
        <Header />
        <Meals />
        <Cart />
      </CartContextProvider>
    </UserActionsContextProvider>
  );
}

export default App;
