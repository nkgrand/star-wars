import React, { useEffect, useState } from "react";
import style from "./style.module.css";
import cn from "classnames";
import { getPeople, getImg } from "../../services/sw-service";
import imgDefault from "../../images/noneImg.jpg";

const People = () => {
  const [count, setCount] = useState(1);
  const [img, setImg] = useState("");
  const [people, setPeople] = useState({});

  useEffect(() => {
    getPeople(count).then((res) => {
      setPeople(res);
    });
    getImg.getPeopleImg(count).then((res) => {
      if (res.name === "Error") {
        setImg(imgDefault);
      } else {
        setImg(
          `https://starwars-visualguide.com/assets/img/characters/${count}.jpg`
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
        <div className={style.peopleBox}>
          <h2>
            <b>{` ${people.name}`}</b>
          </h2>
          <ul>
            <li key={1}>
              Gender: <b>{` ${people.gender}`}</b>
            </li>
            <li key={2}>
              Birth date: <b>{` ${people.birth_year}`}</b>
            </li>
            <li key={3}>
              Eye color: <b>{` ${people.eye_color}`}</b>
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

export default People;
