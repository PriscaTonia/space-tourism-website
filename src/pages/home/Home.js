import {
  StyledHome,
  Container,
  Main,
  MainContent,
  MainDiagram,
} from "./Home.styled";
// import { motion } from "framer-motion";

const Home = () => {
  return (
    <StyledHome
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      <Container>
        {/* <Navbar /> */}
        <Main
          initial={{ y: "100vh" }}
          animate={{ y: 0 }}
          transition={{ delay: 1, type: "spring", stiffness: 70 }}
        >
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
          <div className="btn_hover"></div>
          <MainDiagram>EXPLORE</MainDiagram>
        </Main>
      </Container>
    </StyledHome>
  );
};

export default Home;
