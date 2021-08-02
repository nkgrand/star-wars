import React, { useEffect, useState } from "react";
import style from "./style.module.css";
import cn from "classnames";
import { getPlanet, getImg } from "../../services/sw-service";
import imgDefault from "../../images/noneImg.jpg";

const Planets = () => {
  const [count, setCount] = useState(2);
  const [img, setImg] = useState("");
  const [planet, setPlanet] = useState({});

  useEffect(() => {
    getPlanet(count).then((res) => {
      setPlanet(res);
    });
    getImg.getPlanetImg(count).then((res) => {
      if (res.name === "Error") {
        setImg(imgDefault);
      } else {
        setImg(
          `https://starwars-visualguide.com/assets/img/planets/${count}.jpg`
        );
      }
    });
  }, [count]);

  const decreseIndex = () => {
    setCount((count) => count - 1);
  };

  const increeseIndex = () => {
    setCount((count) => count + 1);
  };

  return (
    <div className={style.wrapper}>
      <div className={style.boxWrapper}>
        <div className={style.imgBox}>
          <img src={img} alt="img" className={style.img} />
        </div>
        <div className={style.planetBox}>
          <h2>
            <b>{` ${planet.name}`}</b>
          </h2>
          <ul>
            <li key={1}>
              Diameter: <b>{` ${planet.diameter}`}</b>
            </li>
            <li key={2}>
              Planet climate: <b>{` ${planet.climate}`}</b>
            </li>
            <li key={3}>
              Planet population: <b>{` ${planet.population}`}</b>
            </li>
          </ul>
        </div>
      </div>
      <div className={style.btnWrapper}>
        <button
          className={cn(style.btn, style.prev)}
          onClick={() => decreseIndex()}
        >
          Prev
        </button>
        <button
          className={cn(style.btn, style.next)}
          onClick={() => increeseIndex()}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Planets;
