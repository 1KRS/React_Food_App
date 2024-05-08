import styled from 'styled-components';

const Error = ({ title, message }) => {
  return (
    <ErrorWrapper className="error">
      <h2>{title}</h2>
      <p>{message}</p>
    </ErrorWrapper>
  );
};
export default Error;

const ErrorWrapper = styled.div`
  /* display: flex;
  align-items: center;
  justify-content: center;
  
  background-color: red; */

  h2 {
    display: flex;
    justify-content: center;
  }
  p {
    display: flex;
    justify-content: center;
  }
`;
