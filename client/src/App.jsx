import styled from 'styled-components';

function App() {
  return (
    <Wrapper className="App">
     <h1 >🇬🇷🇬🇷🇬🇷</h1>
      <h1 >Ούλε τε και μάλα χαίρε!</h1>
      <h1 >🤩</h1>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  h1 {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export default App;
