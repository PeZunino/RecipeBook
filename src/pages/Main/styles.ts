import styled from "styled-components";

const Container = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
`;

const Menu = styled.div`
  height: 100%;
  max-width: 300px;
  width: 100%;
  h2 {
    padding: 0px 35px 30px;
    font-size: xx-large;
  }

  ul {
    font-size: x-large;
    padding-left: 35px;
    list-style: none;
    margin-bottom: 200px;
    color: gray;

    li {
      padding: 20px;
      display: flex;
      align-items: center;

      &:hover {
        transition: 350ms linear;
        color: #361e92;
        a {
          transition: 350ms linear;
          color: #361e92;
        }
      }

      svg {
        margin-right: 20px;
      }
    }
  }

  #upload_modal {
    font-size: large;

    height: 250px;
    margin: 20px;
    border-radius: 40px;
    background-color: #fb9300;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: white;

    img {
      width: 150px;
      position: absolute;
      top: -70%;
      left: 20%;
      transform: rotate(-15deg);
    }

    span {
      width: 220px;
      position: absolute;
      top: 45%;
    }

    button {
      background-color: white;
      border-radius: 10px;
      font-size: large;
      color: #fb9300;
      width: 150px;
      height: 45px;
      position: absolute;
      bottom: 15%;
    }
  }
`;

const Content = styled.div`
  height: 100%;
  width: 100%;
  padding: 0px 50px 0px 150px;
`;

const Dash = styled.div`
  height: 100%;
  max-width: 450px;
  width: 100%;
  background-color: red;
`;
export { Container, Menu, Content, Dash };
