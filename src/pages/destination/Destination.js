import Navbar from "../../components/navbar/Navbar";
import Planet from "../../components/planets/Planet";
import { StyledDest, Container, Main, H2 } from "./Destination.styled";

const Destination = () => {
  return (
    <StyledDest>
      <Container>
        <Navbar />
        <Main>
          <H2>
            {" "}
            <span>01</span> Pick your destination{" "}
          </H2>
          <Planet />
        </Main>
      </Container>
    </StyledDest>
  );
};

export default Destination;
