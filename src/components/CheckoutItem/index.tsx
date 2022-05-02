import { IDog, useStore } from "../../hooks/useCheckoutStore";
import { Button } from "../Button";
import { Container, Content } from "./style";

interface Props {
  dog: IDog;
}

function CheckoutItem({ dog }: Props) {
  const removeDog = useStore((state) => state.removeDog);

  return (
    <>
      <Container>
        <Content className="div-1">
          <img src={dog.url} alt={dog.title} />
        </Content>
        <div className="div-4">
          <Content className="div-3">
            <h1>{dog.title}</h1>
          </Content>
          <Content className="div-2">
            <Button
              background={"#dc7093 !important"}
              text={"REMOVE FROM BASKET"}
              size={"175px"}
              onClick={() => removeDog(dog)}
            />
          </Content>
        </div>
      </Container>
    </>
  );
}

export { CheckoutItem };
