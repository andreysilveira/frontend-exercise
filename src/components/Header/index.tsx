import { Container, Content } from "./style";
import { Link } from 'react-router-dom'
import { useStore } from "../../hooks/useCheckoutStore";

export function Header() {

  const dogs = useStore((state) => state.dogsCheckout);
  
  return (
    <>
      <Container>
        <Content>
        <div className="div-nav">
          </div>
          <div className="div-nav">
            <Link to="/">DOGS</Link>
            <Link to="/adoptions">ADOPTIONS</Link>
          </div>
          <div className="div-nav">
            <Link to="/checkout">CHECKOUT</Link>
            {dogs.length > 0  && <span>{dogs.length}</span>}
          </div>
        </Content>
      </Container>
    </>
  );
}
