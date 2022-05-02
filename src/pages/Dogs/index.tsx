/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import Cards from "../../components/Cards";
import { Header } from "../../components/Header";
import api from "../../services/api";
import { Container } from "./style";
import { IDog, useStore } from "../../hooks/useCheckoutStore";
// import ReactPaginate from "react-paginate";

function Dogs() {
  // const [dogs, setDogs]: any = useState([]);
  const [isAdopted, setIsAdopted] = useState(true);
  // const [itensPerPage, setItensPerPage] = useState(10);
  // const [currentPage, setCurrentPage] = useState(0);

  const dogs = useStore((state) => state.dogs);
  const dogsLoad = useStore((state) => state.load);
  const addDog = useStore((state) => state.addDog);

  useEffect(() => {
    api
      .get("/dogs")
      .then((response) => {
        // console.log("Data . Data", response.data.data);
        dogsLoad(response.data.data);
      })
      .catch((err) => {
        console.error("ocorreu um erro" + err);
      });
  }, []);

  // const pages = Math.ceil(dogs.length / itensPerPage);
  // const startIndex = currentPage * itensPerPage;
  // const endIndex = startIndex + itensPerPage;

  return (
    <>
      <Header />
      <Container>
        {/* <div className="containerr">
          {Array.from(Array(pages),(item, index) => {
            return (
              <button
                value={index}
                onClick={(event) =>
                  setCurrentPage(
                    (event.target as HTMLInputElement).value
                  )
                }
              >
                {index}
              </button>
            );
          })}
        </div> */}
        <div className="div-body">
          {dogs?.map((item: IDog) => {
            return (
              <Cards
                key={item.id}
                text={item.title}
                link={item.url}
                onAddDog={() => {
                  console.log("ITEM", item);
                  addDog(item);
                }}
                isAdopted={isAdopted}
              />
            );
          })}
        </div>
      </Container>
    </>
  );
}

export { Dogs };
