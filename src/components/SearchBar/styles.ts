import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 50px;
  position: relative;
  padding-left: 30px;
  div + div {
    position: absolute;
    right: 0%;
  }
`;

export { Container };
