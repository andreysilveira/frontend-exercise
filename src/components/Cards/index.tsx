import { memo, useState } from "react";
import { Button } from "../Button";
import { Content, Container } from "./style";
import React from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';

function Cards({ text, link, onAddDog, isAdopted }: any) {
  return (
    <>
      <Content>
        <LazyLoadImage src={link} alt={text} height="200" width="300" />
        <div>
          <h1>{text}</h1>
          {isAdopted && <hr />}
          {isAdopted && (
            <Button
              text={"Adopt"}
              size={"60px"}
              isAdopted={false}
              onClick={onAddDog && onAddDog}
            />
          )}
        </div>
      </Content>
    </>
  );
}

export default memo(Cards);
