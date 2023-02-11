import Navbar from "../../components/navbar/Navbar";
import Planet from "../../components/planets/Planet";
import { StyledDest, Container, Main } from "./Destination.styled";

const Destination = () => {
  return (
    <StyledDest>
      <Container>
        <Navbar />
        <Main>
          <Planet />
        </Main>
      </Container>
    </StyledDest>
  );
};

export default Destination;
