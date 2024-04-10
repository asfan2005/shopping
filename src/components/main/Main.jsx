import React from "react";
import "./main.css";
import { main1 } from "..";
import dataMain from "./dataMain";
function Main() {
  return (
    <div className="main">
      <p className="mainP">Хиты продаж</p>
      <div className="mainDiv">
        {dataMain.map((item, index) => {
          return (
            <div>
              <div className="mainDiv_one">
                <img src={item.img} alt="" />
                <p className="mainDiv_one_text">{item.p1}</p>
                <div className="mainDiv_one_text_two">{item.p2}</div>
                <div className="mainDiv_one_price">{item.price}</div>
                <div className="hover_text">Размеры</div>
                <div className="hover_div">
                  <span>
                    <p>ШИРИНА</p>
                    43 СМ
                  </span>
                  x
                  <span>
                    <p>ГЛУБИНА</p>
                    43 СМ
                  </span>
                  x
                  <span>
                    <p>ВЫСОТА</p>
                    77 СМ
                  </span>
                </div>
                <button className="hover_button">Добавить в корзину</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Main;
