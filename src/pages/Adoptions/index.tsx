import  Cards  from "../../components/Cards";
import { Header } from "../../components/Header";
import { Container } from "./style";
import { IDog, useStore } from "../../hooks/useCheckoutStore";
import { useState } from "react";


function Adoptions() {
  const dogs = useStore((state) => state.dogsCheckout);

  return (
    <>
      <Header />
      <Container>
        {dogs?.map((item: IDog) => {
          return (
            <Cards
              key={item.id}
              text={item.title}
              link={item.url}
              isAdopted={false}
            />
          );
        })}
      </Container>
    </>
  );
}

export {Adoptions};