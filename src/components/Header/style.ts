import styled from "styled-components";

export const Container = styled.header`
  -webkit-box-shadow: 0 10px 5px #888888;
  -moz-box-shadow: 0 10px 5px #888888;
  box-shadow: 0 1px 5px #888888;
`;

export const Content = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-content: center;
  flex-wrap: nowrap;
  flex-direction: row;
  background-color: #ffffff;

  .div-nav {
    /* width: 50%; */
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 10px;

    a {
      text-decoration: none;
      text-transform: none;
      color: #637485;
      font-weight: bold;
      padding: 10px;
    }
    span {
      font-size: 0.6rem;
      color: #fff;
      font-weight: bold;
      padding: 1px 5px;
      background-color: red;
      border-radius: 100%;
      position: relative;
      left: -10px;
      top: 5px;
    }
  }
`;
