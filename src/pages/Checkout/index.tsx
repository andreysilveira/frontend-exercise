import { Button } from "../../components/Button";
import { CheckoutItem } from "../../components/CheckoutItem";
import { Header } from "../../components/Header";
import { useStore } from "../../hooks/useCheckoutStore";
import { Container, Title } from "./style";

function Checkout() {
  const dogs = useStore((state) => state.dogsCheckout);

  return (
    <>
      <Header />
      <Container>
        <Title>Your new friends!</Title>
        {dogs.map((item) => <CheckoutItem dog={item}/> )}
        <Button
          background={"#3e8ed0"}
          text={"SUBMIT ADOPTION!"}
          size={"145px"}
        />
      </Container>
    </>
  );
}

export { Checkout };
