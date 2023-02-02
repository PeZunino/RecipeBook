import styled, { css } from "styled-components";

interface ContainerProps {
  inputFocus: boolean;
}
const Container = styled.div<ContainerProps>`
  background-color: #ffffff;
  display: flex;
  align-items: center;
  position: absolute;

  input {
    font-size: large;
    opacity: 50%;
  }

  svg {
    display: inline;
    color: gray;
    margin-right: 10px;
  }

  ${(props) =>
    props.inputFocus &&
    css`
      input {
        opacity: 70%;
      }
      svg {
        color: #361e92;
      }
    `}
`;

export { Container };
