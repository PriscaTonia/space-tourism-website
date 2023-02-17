import { StyledTechnology, Container, Main, H2 } from "./Technology.styled";
import Navbar from "../../components/navbar/Navbar";
import Tech from "../../components/tech/Tech";

const Technology = () => {
  return (
    <StyledTechnology>
      <Container>
        <Navbar />
        <Main>
          <H2>
            {" "}
            <span>03</span> SPACE LAUNCH 101{" "}
          </H2>

          <Tech />
        </Main>
      </Container>
    </StyledTechnology>
  );
};

export default Technology;
