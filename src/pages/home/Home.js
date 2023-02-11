import Navbar from "../../components/navbar/Navbar";
import {
  StyledHome,
  Container,
  Main,
  MainContent,
  MainDiagram,
} from "./Home.styled";

const Home = () => {
  return (
    <StyledHome>
      <Container>
        <Navbar />
        <Main>
          <MainContent>
            <p className="first_text">SO, YOU WANT TO TRAVEL TO</p>
            <p className="second_text">SPACE</p>
            <p className="third_text">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </MainContent>
          <MainDiagram>
            <p>EXPLORE</p>
          </MainDiagram>
        </Main>
      </Container>
    </StyledHome>
  );
};

export default Home;
