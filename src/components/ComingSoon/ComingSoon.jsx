import React from "react";
import Timer from "../Timer/Timer";
import { ReactComponent as BlueBox } from "../../assets/icon/blueBox.svg";
import "./comingSoon.css";

export default function ComingSoon() {
  return (
    <div className="coming_Soon_Box">
      <div className="coming_Soon_Timer">
        <BlueBox />
        <Timer />
      </div>


          <p className="comin_Soon_Promo">
            беспроигрышная акция <br /> с 6 сентября по 14 ноября 2021
          </p>
          <p className="coming_Soon_Contect"> Shopping марафон </p>
          <p className="comin_Soon_Title">«Афимоллу 10 лет!»</p>
          <p className="coming_Soon_Limit">10 недель — 10 розыгрышей</p>
          <button className="coming_Soon_Btn">Зарегистрироваться</button>
 

    
    </div>
  );
}
