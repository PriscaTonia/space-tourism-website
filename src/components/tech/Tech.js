import { useState } from "react";
import { Container, Content, Tabs, H1, P, Image } from "./Tech.styled";
import { technology } from "../data/data";

const Tech = () => {
  const [name, setName] = useState("Launch vehicle");

  return (
    <div>
      {name
        ? technology
            .filter((planet) => planet.name === name)
            .map(({ name, landscape, portrait, description }, i) => (
              <Container key={i}>
                <Content>
                  <Tabs>
                    <button
                      className="active"
                      onClick={(e) => {
                        setName("Launch vehicle");

                        let vehicle = e.target;

                        const btns = e.target.parentElement.childNodes;
                        btns.forEach((btn) => {
                          btn.classList.remove("active");
                        });

                        vehicle.classList.add("active");
                      }}
                    >
                      1
                    </button>
                    <button
                      onClick={(e) => {
                        setName("Spaceport");
                        let spaceport = e.target;

                        const btns = e.target.parentElement.childNodes;
                        btns.forEach((btn) => {
                          btn.classList.remove("active");
                        });

                        spaceport.classList.add("active");
                      }}
                    >
                      2
                    </button>

                    <button
                      onClick={(e) => {
                        setName("Space capsule");
                        let capsule = e.target;

                        const btns = e.target.parentElement.childNodes;
                        btns.forEach((btn) => {
                          btn.classList.remove("active");
                        });

                        capsule.classList.add("active");
                      }}
                    >
                      3
                    </button>
                  </Tabs>
                  <div className="main_content">
                    <h4>THE TERMINOLOGY…</h4>
                    <H1> {name} </H1>
                    <P>{description}</P>
                  </div>
                </Content>
                <Image>
                  <img src={landscape} className="landscape" alt="" />
                  <img src={portrait} className="portrait" alt="" />
                </Image>
              </Container>
            ))
        : "Error!!!"}
    </div>
  );
};

export default Tech;
