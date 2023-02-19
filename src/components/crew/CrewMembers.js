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
  const [name, setName] = useState("Douglas");

  return (
    <div>
      {name
        ? crewMembers
            .filter((crew) => crew.name === name)
            .map(({ name, Lname, image, role, bio }, i) => (
              <Container
                key={i}
                initial={{ x: "100vw" }}
                animate={{ x: 0 }}
                transition={{ delay: 1, type: "spring", stiffness: 70 }}
              >
                <Content>
                  <H3>{role}</H3>
                  <div className="header_name">
                    <H1> {name} </H1>
                    <H1> {Lname} </H1>
                  </div>
                  <P> {bio} </P>
                  <Tabs>
                    <button
                      className="active"
                      onClick={(e) => {
                        setName("Douglas");

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
                        setName("Mark");
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
                        setName("Victor");
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
                        setName("Anousheh");
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
                  <img src={image} alt="" className={name} />
                </Image>
              </Container>
            ))
        : "Error!!!"}
    </div>
  );
};

export default Crew;
