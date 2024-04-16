import logoImg from '../assets/images/logo/logo.jpg';
import styled from 'styled-components';
import Button from './Button';

const Header = () => {
  return (
    <MainHeader>
      <div id="title">
        <img src={logoImg} alt="" />
        <h1>Food App</h1>
      </div>

      <nav>
        <Button textOnly>Cart (0)</Button>
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
