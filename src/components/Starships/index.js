import React, { useEffect, useState } from "react";
import style from "./style.module.css";
import cn from "classnames";
import { getStarships, getImg } from "../../services/sw-service";
import imgDefault from "../../images/noneImg.jpg";

const Starships = () => {
  const [count, setCount] = useState(2);
  const [img, setImg] = useState("");
  const [starships, setStarships] = useState({});

  useEffect(() => {
    getStarships(count).then((res) => {
      setStarships(res);
    });
    getImg.getStarshipImg(count).then((res) => {
      if (res.name === "Error") {
        setImg(imgDefault);
      } else {
        setImg(
          `https://starwars-visualguide.com/assets/img/starships/${count}.jpg`
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
        <div className={style.starshipsBox}>
          <h2>
            <b>{` ${starships.name}`}</b>
          </h2>
          <ul>
            <li key={1}>
              Model: <b>{` ${starships.model}`}</b>
            </li>
            <li key={2}>
              Number of passengers: <b>{` ${starships.passengers}`}</b>
            </li>
            <li key={3}>
              Starship class: <b>{` ${starships.starship_class}`}</b>
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

export default Starships;
