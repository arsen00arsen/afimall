import React from "react";
import './promoCard.css'

function PromoCard() {
  return (
    <div className='propmo_Card_Box'>
      <p className="uniq-Title">
        Розыгрыш <br /> дополнительных призов
      </p>
      <p className="title_2">
        Проведение розыгрыша «Суперпризов» проходит еженедельно <br /> в прямом
        эфире телеканала RU.TV
      </p>
      <div className="img_Box"></div>

      <div>
        <button className="about_Btn">принять участие</button>
        <span className="btn_Text">расписание розыгрышей</span>
      </div>
    </div>
  );
}

export default PromoCard;
