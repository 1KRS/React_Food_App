import styled from 'styled-components';
import Meal from './Meal';
import useHttp from '../hooks/useHttp';
import Error from './Error';

const requestConfig = {};

const Catalog = () => {
  const {
    data: loadedMeals,
    isLoading,
    error,
  } = useHttp('http://localhost:8000/meals', requestConfig, []);

  if (isLoading) {
    return <LoadingWrapper>Fetching meals...</LoadingWrapper>;
  }

  if (error) {
    return <Error title="Failed to fetch meals" message={error} />;
  }

  return (
    <CatalogWrapper>
      {loadedMeals.map((meal) => (
        <Meal
          key={meal.id}
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

const LoadingWrapper = styled.p`
  display: flex;
  justify-content: center;
`;

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
