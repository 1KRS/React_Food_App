import { useContext } from 'react';
import Modal from './Modal';
import CartContext from '../store/cartContext';
import { currencyFormatter } from '../util/formatting';
import Button from './Button';
import UserActionsContext from '../store/userActionsContext';
import styled from 'styled-components';
import CartItem from './CartItem';

const Cart = () => {
  const cartCtx = useContext(CartContext);
  const userCtx = useContext(UserActionsContext);

  const cartTotal = cartCtx.meals.reduce(
    (totalPrice, meal) => totalPrice + meal.price * meal.quantity,
    0
  );

  const handleCloseCart = () => {
    userCtx.hideCart();
  };

  return (
    <Modal classes="cart" open={userCtx.progress === 'cart'}>
      <Title>Your Cart</Title>
      <ItemsList>
        {cartCtx.meals.map((meal) => (
          <CartItem
            key={meal.id}
            name={meal.name}
            quantity={meal.quantity}
            price={meal.price}
            onIncrease={() => cartCtx.addMeal(meal)}
            onDecrease={() => cartCtx.removeMeal(meal.id)}
          ></CartItem>
        ))}
      </ItemsList>
      <CartTotal>{currencyFormatter.format(cartTotal)}</CartTotal>
      <ModalActions className="modal-actions">
        <Button textOnly onClick={handleCloseCart}>
          Close
        </Button>
        <Button>Go to checkout</Button>
      </ModalActions>
    </Modal>
  );
};

// STYLED COMPONENTS

const Title = styled.h2`
  margin: 1rem 0;
`;

const ItemsList = styled.ul`
  list-style: none;
  margin: 0.5rem 0;
  padding: 0;
`;

const CartTotal = styled.p`
  display: flex;
  justify-content: flex-end;
  margin: 2rem 0;
  font-size: 1.15rem;
  font-weight: bold;
  color: #46443c;
`;

const ModalActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;

  .text-button {
    color: #1d1a16;
  }

  .text-button:hover,
  .text-button:active {
    color: #312c1d;
  }
`;
export default Cart;
