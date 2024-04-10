import React, { useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";

import {
  Telephone,
  Search,
  Heart,
  CartCheck,
  Person,
  List,
  X,
  Flag,
} from "react-bootstrap-icons";
import {
  car,
  logo,
  type1,
  type2,
  type3,
  type4,
  type5,
  type6,
  icon2,
} from "../index";
import data from "./data";
function Header() {
  const [mobilMenyu, setMobilMenyu] = useState(false);
  const [id, setId] = useState(null);
  function openMenyu() {
    setMobilMenyu(true);
  }

  // menyu yopish code
  function closeMenyu() {
    setMobilMenyu(false);
    setId(null);
  }
  // Id code
  function setMenu(id) {
    setId(id);
  }

  return (
    <div className="header">
      {/* header code */}
      <div className="header_section">
        <List onClick={() => openMenyu()} className="burger" />
        <img src={logo} className="logo" alt="" />
        <div className="ul">
          <Link className="link">Главная</Link>
          <Link className="link">О нас</Link>
          <Link className="link">Контакты</Link>
        </div>
        <div className="header_input">
          <Search className="m-auto fs-5" />
          <input
            type="search"
            placeholder="Поиск"
            className="form-control w-75"
          />
        </div>

        <div className="header_contact">
          <div id="one_one" className="contact_one">
            <Telephone className="fs-5 m-auto" />
            <p>+998(91)821-81-95</p>
          </div>
          <div className="contact_one">
            <img src={car} className="m-auto" alt="" />
            <p>Доставка</p>
          </div>
        </div>
        <div className="header_icons">
          <Heart className="fs-5 m-auto" />
          {/* <CartCheck className="fs-4 m-auto" /> */}
          <img src={icon2} className="m-auto" alt="" />
          <Person className="fs-4 m-auto" />
        </div>
      </div>

      {/* Header input mobil code */}

      <div className="header_input_button">
        <input
          type="search"
          placeholder="Поиск"
          className="form-control m-auto my-2"
          style={{ width: "90%" }}
        />
      </div>

      {/* category code header uchun */}
      <div className="div_type">
        <div className="type_one">
          <img src={type1} alt="" />
          <Link className="p">Кухни</Link>
        </div>
        <div className="type_one">
          <img src={type2} alt="" />
          <Link className="p">Спальни</Link>
        </div>
        <div className="type_one">
          <img src={type3} alt="" />
          <Link className="p">Гостинные</Link>
        </div>
        <div className="type_one">
          <img src={type4} alt="" />
          <Link className="p">Прихожие</Link>
        </div>
        <div className="type_one">
          <img src={type5} alt="" />
          <Link className="p">Офисная мебель</Link>
        </div>
        <div className="type_one">
          <img src={type6} alt="" />
          <Link className="p">Детская</Link>
        </div>
       <div className="type_one">
        <Link id="p" className="p">Aksiya</Link>
       </div>
      </div>

      {/* Mobilni menyu code  */}

      {mobilMenyu && (
        <div className="mobil_menyu">
          <div className="menyu_header">
            <p>Menyu</p>
            <X onClick={() => closeMenyu()} className="icons" />
          </div>
          {data.map((item, index) => (
            <div
              className="menyu_item"
              key={index}
              style={{
                backgroundColor:
                  item.id === null
                    ? id === 1
                      ? "rgba(241,241,241,1)"
                      : "initial"
                    : item.id === id
                    ? "rgba(241,241,241,1)"
                    : "initial",
              }}
              onClick={() => setMenu(item.id)}
            >
              <img src={item.img} alt="" />
              <p
                style={{
                  color:
                    item.word === "Акция" ? "rgba(233, 45, 45, 1)" : "initial",
                }}
              >
                {item.word}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Header;
