import { StyledCrew, Container, Main, H2 } from "./Crew.styled";
import Navbar from "../../components/navbar/Navbar";
import CrewMembers from "../../components/crew/CrewMembers";

const Crew = () => {
  return (
    <StyledCrew>
      <Container>
        <Navbar />
        <Main>
          <H2>
            {" "}
            <span>02</span> Meet your crew{" "}
          </H2>
          <CrewMembers />
        </Main>
      </Container>
    </StyledCrew>
  );
};

export default Crew;
