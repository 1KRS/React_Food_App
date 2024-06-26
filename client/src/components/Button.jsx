import styled from 'styled-components';

const Button = ({ children, textOnly, classnames, ...props }) => {
  const css = textOnly ? `text-button ${classnames}` : `button ${classnames}`;

  return (
    <ButtonWrapper className={css} {...props}>
      {children}
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.button`
  .button {
    font: inherit;
    cursor: pointer;
    background-color: #ffc404;
    border: 1px solid #ffc404;
    color: #1f1a09;
    padding: 0.5rem 1.5rem;
    border-radius: 4px;
  }

  .button:hover,
  .button:active {
    background-color: #ffab04;
    border-color: #ffab04;
    color: #1f1a09;
  }

  .text-button {
    font: inherit;
    cursor: pointer;
    background-color: transparent;
    border: none;
    color: #ffc404;
  }

  .text-button:hover,
  .text-button:active {
    color: #ffab04;
  }
`;

export default Button;
