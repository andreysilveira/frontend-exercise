import styled from "styled-components";
import { device } from "../../styles/global";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-content: center;
  justify-content: center;

  Button {
    margin: 1rem 0rem 0rem 3.5rem;
    @media (min-width: 320px) and (max-width: 425px) {
    
      margin: 1.3rem;
    }

    @media (min-width: 768px) and (max-width: 1024px) {
 
      margin-left: 2.3rem;
    }

    @media (min-width: 1024px) and (max-width: 1440px) {

      margin-left: 3.8rem;
    }

    @media (min-width: 1440px) {
   
      margin-left: 4.5rem;
    }
  }
`;

export const Title = styled.h1`
  margin: 1rem 0rem 0rem 3.6rem;
  @media (min-width: 320px) and (max-width: 425px) {
    margin: 1.3rem;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    margin-left: 2.3rem;
  }

  @media (min-width: 1024px) and (max-width: 1440px) {
    margin-left: 3rem;
  }

  @media (min-width: 1440px) {
    margin-left: 4.5rem;
  }
`;
