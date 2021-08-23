import React from "react";
import { EligibilityIcon } from "../EligibilityIcon/EligibilityIcon";
import "./eligibility.css";

function Eligibility() {
  return (
    <div className="eligibility_Box">
      <h3 className="eligibility_title">правила участия</h3>
      <EligibilityIcon
        name="FiveBox"
        title="Зарегистрируйся в личном кабинете"
        text="Номера телефонов регистрации на сайте и в мобильном приложении должны совпадать!"
        size="30%"
        button={1}
        number="1"
        flex="left"
      />
      <EligibilityIcon
        name="TwoBox"
        title="Скачай мобильное приложение Afimall"
        size="50%"
        button={2}
        number="2"
      />
      <EligibilityIcon
        name="SixBox"
        title="Совершай покупки в Афимолле"
        size="34%"
        number="3"
        flex="left"
      />
      <EligibilityIcon
        name="ForBox"
        title="Сканируй чеки от 300 ₽ в мобильном приложении"
        size="34%"
        number="4"
      />
      <EligibilityIcon
        name="Circle"
        title="Копи баллы и обменивай их  на купоны «Розыгрыш» в мобильном приложении"
        size="34%"
        number="5"
        flex="left"
      />
      <div className="eligibility_Footer_Btn_Wrapper">
        <button className="eligibility_Footer_Btn">
          Полные правила розыгрыша
        </button>
      </div>
      <div className='eligibility_Footer_Box_Wrapper'>
        <div className='eligibility_Footer_Box'>
          <div>
          Успейте зарегистрироваться  на розыгрыш призов
          </div>
          <button className='eligibility_Footer_Box_Btn'>зарегистрироваться</button>
        </div>
      </div>
    </div>
  );
}

export default Eligibility;
