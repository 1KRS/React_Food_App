import { useContext } from 'react';
import Modal from './Modal';
import CartContext from '../store/cartContext';
import styled from 'styled-components';
import { currencyFormatter } from '../util/formatting';
import UserActionsContext from '../store/userActionsContext';
import Button from './Button';
import Input from './Input';

const Checkout = () => {
  const cartCtx = useContext(CartContext);
  const userCtx = useContext(UserActionsContext);

  const cartTotal = cartCtx.meals.reduce(
    (totalPrice, meal) => totalPrice + meal.price * meal.quantity,
    0
  );

  const handleCloseCheckout = () => {
    userCtx.hideCheckout();
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const fd = new FormData(event.target); // αποθήκευση δεδομένων αντί με useState ή useRef λύσεις
    const customerData = Object.fromEntries(fd.entries()); // { email: test@example.com }

    fetch('http://localhost:8000/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        order: {
          items: cartCtx.meals,
          customer: customerData
        }
      })
    });
  };

  return (
    <Modal open={userCtx.progress === 'checkout'} onClose={handleCloseCheckout}>
      <form onSubmit={handleSubmit}>
        <h2>Checkout</h2>
        <CartTotal>
          Total Amount: {currencyFormatter.format(cartTotal)}
        </CartTotal>
        <Input label="Full Name" type="text" id="name" />
        <Input label="E-Mail Address" type="email" id="email" />
        <Input label="Street Address" type="text" id="street" />
        <div className="control-row">
          <Input label="Postal Code" type="text" id="postal-code" />
          <Input label="City" type="text" id="city" />
        </div>
        <ModalActions className="modal-actions">
          <Button textOnly type="button" onClick={handleCloseCheckout}>
            Close
          </Button>
          <Button onClick={console.log('log')}>Submit Order</Button>
        </ModalActions>
      </form>
    </Modal>
  );
};

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

const CartTotal = styled.p`
  display: flex;
  justify-content: flex-end;
  margin: 2rem 0;
  font-size: 1.15rem;
  font-weight: bold;
  color: #46443c;
`;

export default Checkout;
