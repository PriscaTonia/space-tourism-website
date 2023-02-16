import {
  Container,
  Content,
  Tabs,
  H3,
  H1,
  P,
  Image,
} from "./CrewMembers.styled";
import { crewMembers } from "../data/data";
import { useState } from "react";

const Crew = () => {
  const [name, setName] = useState("Douglas Hurley");

  return (
    <div>
      {name
        ? crewMembers
            .filter((crew) => crew.name === name)
            .map(({ name, image, role, bio }, i) => (
              <Container key={i}>
                <Content>
                  <H3>{role}</H3>
                  <H1> {name} </H1>
                  <P> {bio} </P>
                  <Tabs>
                    <button
                      className="active"
                      onClick={(e) => {
                        setName("Douglas Hurley");

                        let moon = e.target;

                        const btns = e.target.parentElement.childNodes;
                        btns.forEach((btn) => {
                          btn.classList.remove("active");
                        });

                        moon.classList.add("active");
                      }}
                    ></button>
                    <button
                      onClick={(e) => {
                        setName("Mark Shuttleworth");
                        let mars = e.target;

                        const btns = e.target.parentElement.childNodes;
                        btns.forEach((btn) => {
                          btn.classList.remove("active");
                        });

                        mars.classList.add("active");
                      }}
                    ></button>

                    <button
                      onClick={(e) => {
                        setName("Victor Glover");
                        let europa = e.target;

                        const btns = e.target.parentElement.childNodes;
                        btns.forEach((btn) => {
                          btn.classList.remove("active");
                        });

                        europa.classList.add("active");
                      }}
                    ></button>

                    <button
                      onClick={(e) => {
                        setName("Anousheh Ansari");
                        let titan = e.target;

                        const btns = e.target.parentElement.childNodes;
                        btns.forEach((btn) => {
                          btn.classList.remove("active");
                        });

                        titan.classList.add("active");
                      }}
                    ></button>
                  </Tabs>
                </Content>
                <Image>
                  <img src={image} alt="" />
                </Image>
              </Container>
            ))
        : "Error!!!"}
    </div>
  );
};

export default Crew;
