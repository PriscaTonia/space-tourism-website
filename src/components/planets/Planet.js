import { useState } from "react";
import {
  Container,
  Content,
  Tabs,
  H1,
  P,
  Distance,
  Time,
  Image,
} from "./Planet.styled";
import { planets } from "../data/data";
import { motion } from "framer-motion";

const Planet = () => {
  const [name, setName] = useState("moon");

  return (
    <div>
      {name
        ? planets
            .filter((planet) => planet.name === name)
            .map(({ name, img, description, distance, time }, i) => (
              <Container
                key={i}
                initial={{ x: "100vw" }}
                animate={{ x: 0 }}
                transition={{ delay: 1, type: "spring", stiffness: 70 }}
              >
                <Image>
                  <img src={img} alt="" />
                </Image>
                <Content>
                  <Tabs>
                    <button
                      className="active"
                      onClick={(e) => {
                        setName("moon");

                        let moon = e.target;

                        const btns = e.target.parentElement.childNodes;
                        btns.forEach((btn) => {
                          btn.classList.remove("active");
                        });

                        moon.classList.add("active");
                      }}
                    >
                      Moon
                    </button>
                    <button
                      onClick={(e) => {
                        setName("mars");
                        let mars = e.target;

                        const btns = e.target.parentElement.childNodes;
                        btns.forEach((btn) => {
                          btn.classList.remove("active");
                        });

                        mars.classList.add("active");
                      }}
                    >
                      Mars
                    </button>

                    <button
                      onClick={(e) => {
                        setName("europa");
                        let europa = e.target;

                        const btns = e.target.parentElement.childNodes;
                        btns.forEach((btn) => {
                          btn.classList.remove("active");
                        });

                        europa.classList.add("active");
                      }}
                    >
                      Europa
                    </button>

                    <button
                      onClick={(e) => {
                        setName("titan");
                        let titan = e.target;

                        const btns = e.target.parentElement.childNodes;
                        btns.forEach((btn) => {
                          btn.classList.remove("active");
                        });

                        titan.classList.add("active");
                      }}
                    >
                      Titan
                    </button>
                  </Tabs>
                  <H1> {name} </H1>
                  <P>{description}</P>
                  <hr />
                  <motion.div className="footer_content">
                    <Distance>
                      <p>AVG. DISTANCE</p>
                      <span>{distance}</span>
                    </Distance>
                    <Time>
                      <p>Est. travel time</p>
                      <span>{time}</span>
                    </Time>
                  </motion.div>
                </Content>
              </Container>
            ))
        : "Error!!!"}
    </div>
  );
};

export default Planet;
