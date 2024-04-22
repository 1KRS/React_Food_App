import { createContext, useReducer } from 'react';

const CartContext = createContext({
  meals: [],
  addMeal: (meal) => {},
  removeMeal: (id) => {},
});

// ACTIONS

const cartReducer = (state, action) => {
  if (action.type === 'ADD_MEAL') {
    const mealsToBeUpdated = [...state.meals];

    const existingMealIndex = state.meals.findIndex(
      (meal) => meal.id === action.meal.id
    );

    if (existingMealIndex > -1) {
      const existingMeal = state.meals[existingMealIndex];
      const updatedMeal = {
        ...existingMeal,
        quantity: existingMeal.quantity + 1,
      };
      mealsToBeUpdated[existingMealIndex] = updatedMeal;
    } else {
      mealsToBeUpdated.push({ ...action.meal, quantity: 1 });
    }

    return { ...state, meals: mealsToBeUpdated };
  }

  if (action.type === 'REMOVE_MEAL') {
    const mealsToBeUpdated = [...state.meals];

    const existingMealIndex = state.meals.findIndex(
      (meal) => meal.id === action.id
    );

    const existingMeal = state.meals[existingMealIndex];

    if (existingMeal.quantity > 1) {
      const updatedMeal = {
        ...existingMeal,
        quantity: existingMeal.quantity - 1,
      };

      mealsToBeUpdated[existingMealIndex] = updatedMeal;
    } else {
      mealsToBeUpdated.splice(existingMealIndex, 1);
    }

    return { ...state, meals: mealsToBeUpdated };
  }

  return state;
};

// PROVIDER

export const CartContextProvider = ({ children }) => {
  const [cart, dispatchCartAction] = useReducer(cartReducer, { meals: [] });

  const addMeal = (meal) => {
    dispatchCartAction({ type: 'ADD_MEAL', meal: meal });
  };
  const removeMeal = (id) => {
    dispatchCartAction({ type: 'REMOVE_MEAL', id: id });
  };

  const cartContext = {
    meals: cart.meals,
    addMeal: addMeal,
    removeMeal: removeMeal,
  };

  console.log(cartContext);

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartContext;
