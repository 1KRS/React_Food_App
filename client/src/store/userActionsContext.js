import { createContext, useState } from 'react';

const UserActionsContext = createContext({
  progress: '', // 'cart', 'checkout'
  showCart: () => {},
  hideCart: () => {},
  showCheckout: () => {},
  hideCheckout: () => {}
});

// ACTIONS

// PROVIDER

export const UserActionsContextProvider = ({ children }) => {
  const [userAction, setUserAction] = useState('')

  const showCart = () => {
    setUserAction('cart')
  }

  const hideCart = () => {
    setUserAction('')
  }

  const showCheckout = () => {
    setUserAction('checkout')
  }

  const hideCheckout = () => {
    setUserAction('')
  }

  const userActionsContext = {
    progress: userAction,
    showCart,
    hideCart,
    showCheckout,
    hideCheckout
  }

  return <UserActionsContext.Provider value={userActionsContext}>{children}</UserActionsContext.Provider>;
};

export default UserActionsContext;
