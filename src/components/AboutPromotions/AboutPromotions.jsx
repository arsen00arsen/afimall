import React from "react";
import PromoCard from "../PromoCard/PromoCard";
import "./aboutPromotions.css";

export default function AboutPromotions() {
  return (
    <div className="promo_Action_Box">
      <h1>Об акции</h1>
      <p className="unit">
        В честь юбилея ТРЦ «Афимолл Сити» запускает Shopping марафон <br /> с 6
        сентября по 14 ноября 2021 для розыгрыша призов каждую неделю
      </p>
      <div className="promo_Card_Box">
        <PromoCard />
        <PromoCard />
      </div>
    </div>
  );
}
