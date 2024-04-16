import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Meal from './Meal';

const Catalog = () => {
  const [loadedMeals, setLoadedMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      // try catch εδώ//
      const response = await fetch('http://localhost:8000/meals');

      if (!response.ok) {
        // ...
      }

      const meals = await response.json();
      setLoadedMeals(meals);
    };

    fetchMeals();
  }, []);

  return (
    <CatalogWrapper>
      {loadedMeals.map((meal) => (
        <Meal key={meal.id}
          id={meal.id}
          name={meal.name}
          image={meal.image}
          description={meal.description}
          price={meal.price}
        />
      ))}
    </CatalogWrapper>
  );
};

const CatalogWrapper = styled.ul`
  width: 90%;
  max-width: 70rem;
  list-style: none;
  margin: 2rem auto;
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  gap: 1rem;
`;

export default Catalog;
