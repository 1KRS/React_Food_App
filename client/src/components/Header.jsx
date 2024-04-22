import logoImg from '../assets/images/logo/logo.jpg';
import styled from 'styled-components';
import Button from './Button';
import { useContext } from 'react';
import CartContext from '../store/cartContext';
import UserActionsContext from '../store/userActionsContext';

const Header = () => {
  const cartCtx = useContext(CartContext);
  const userCtx = useContext(UserActionsContext);

  const cartQuantity = cartCtx.meals.reduce((totalMealsInTheCart, meal) => {
    return totalMealsInTheCart + meal.quantity;
  }, 0);

  const handleShowCart = () => {
    userCtx.showCart();
  };

  return (
    <MainHeader>
      <div id="title">
        <img src={logoImg} alt="" />
        <h1>Food App</h1>
      </div>

      <nav>
        <Button textOnly onClick={handleShowCart}>
          Cart ({cartQuantity})
        </Button>
      </nav>
    </MainHeader>
  );
};

const MainHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem 10%;

  #title {
    display: flex;
    gap: 1rem;
    align-items: center;
  }

  #title img {
    width: 4rem;
    height: 4rem;
    object-fit: contain;
    border-radius: 50%;
    border: 2px solid #ffc404;
  }

  button {
    font-size: 1.5rem;
    font-family: 'Lato', sans-serif;
  }
`;
export default Header;
