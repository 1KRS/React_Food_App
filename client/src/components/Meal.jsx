import styled from 'styled-components';
import { currencyFormatter } from '../util/formatting';
import Button from './Button';
import { useContext } from 'react';
import CartContext from '../store/cartContext';

const Meal = ({ id, name, image, description, price }) => {

  const mealItem = {id, name, image, description, price}
  const cartCtx = useContext(CartContext)

  const handleAddMealToCart = () => {
    cartCtx.addMeal(mealItem)
  }

  return (
    <MealWrapper>
      <article>
        <img src={`http://localhost:8000/${image}`} alt={name} />
        <div>
          <h3>{name}</h3>
          <p className="meal-item-price">{currencyFormatter.format(price)}</p>
          <p className="meal-item-description">{description}</p>
        </div>
        <p className="meal-item-actions">
          <Button onClick={handleAddMealToCart}>Add to Cart</Button>
        </p>
      </article>
    </MealWrapper>
  );
};

const MealWrapper = styled.li`
  background-color: #1d1a16;
  border-radius: 1rem;
  overflow: hidden;
  text-align: center;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.3);

  article {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  img {
    width: 100%;
    height: 20rem;
    object-fit: cover;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: bold;
    margin: 0.75rem 0;
  }

  .meal-item-description {
    margin: 1rem;
  }

  .meal-item-price {
    display: inline-block;
    background-color: #312c1d;
    color: #ffc404;
    font-size: 0.9rem;
    font-weight: bold;
    padding: 0.5rem 2rem;
    margin: 0;
    border-radius: 4px;
  }

  .meal-item-actions {
    margin-bottom: 1.5rem;
  }
`;
export default Meal;
