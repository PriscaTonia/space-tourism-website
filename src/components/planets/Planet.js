import { useState } from "react";
// import { NavLink } from "react-router-dom";
import { planets } from "../data/data";

const Planet = () => {
  const [name, setName] = useState("moon");
  console.log(name);

  return (
    <div>
      <div className="tabs">
        <button
          onClick={() => {
            setName("moon");
          }}
        >
          Moon
        </button>
        <button
          onClick={() => {
            setName("mars");
          }}
        >
          Mars
        </button>

        <button
          onClick={() => {
            setName("europa");
            console.log(name);
          }}
        >
          Europa
        </button>

        <button
          onClick={() => {
            setName("titan");
          }}
        >
          Titan
        </button>
      </div>
      {name
        ? planets
            .filter((planet) => planet.name === name)
            .map(({ name, img, description, distance, time }, i) => (
              <div className="container" key={i}>
                <div className="image">
                  <img src={img} alt="" />
                </div>
                <div className="content">
                  <h1> {name} </h1>
                  <p>{description}</p>
                  <hr />
                  <div className="distance">
                    <p>AVG. DISTANCE</p>
                    <span>{distance}</span>
                  </div>
                  <div className="time">
                    <p>Est. travel time</p>
                    <span>{time}</span>
                  </div>
                </div>
              </div>
            ))
        : "Error!!!"}
    </div>
  );
};

export default Planet;
