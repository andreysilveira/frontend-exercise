import styled from "styled-components";
import { device } from "../../styles/global";

export const Container = styled.div`
  margin-top: 1rem !important;
  display: flex;
  margin: 0 auto;
  width: 90%;
  height: 130px;
  background-color: #ffffff;
  align-items: center;
  justify-content: space-between;
  align-content: center;

  .div-1 {
    margin: 0px 10px 0px 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: center;
  }

  .div-2 {
    margin-right: 10px;

    button {
      margin: 0px !important;
    }
  }

  .div-4 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    align-content: space-between;
    width: 100%;
    /* flex-direction: row; */

    @media (min-width: 320px) and (max-width: 425px) {
      flex-direction: column;
    }
  }
`;

export const Content = styled.div`
  display: flex;

  img {
    width: 100px;
    height: 100px;
  }

  h1 {
    font-size: 1.3rem;
    margin-left: 10px;
    @media ${device.mobileS} {
      font-size: 1rem;
    }
  }

  Button {
    height: 2rem;
    @media (min-width: 320px) and (max-width: 425px) {
        width: 160px;
    }
  }
`;
