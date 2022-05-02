import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  margin-top: 15px;
`;

export const Content = styled.div`
  -webkit-box-shadow: 0 0px 5px #888888;
  -moz-box-shadow: 0 0px 5px #888888;
  /* box-shadow: 5px #888888; */
  margin: 10px;
  background: transparent;

  img {
    height: 200px;
    width: 300px;
    border-radius: 5px 5px 0px 0px;
    -webkit-border-radius: 5px 5px 0px 0px;
    -moz-border-radius: 5px 5px 0px 0px;
  }

  div {
    padding: 0px 10px 10px;
    max-width: 280px;
    h1 {
      margin-top: 0px;
      font-size: 0.8rem;
      /* border-bottom: 1px solid #dddddd; */
    }

    hr {
      background-color: #dcdce0;
      height: 1px;
      border: 0px;
    }
  }
`;
