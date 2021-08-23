import React from "react";
import "./timer.css";

export default function Timer() {
  return (
    <div className="timer_Box">
      <div className='timer_Item_First_Block'>До супер-розыгрыша осталось</div>
      <div className='timer_Item_Last_Block'>
        <div>
          <span className='tim_Item'>05:</span>
          <span className='tim_Item'>18:</span>
          <span className='tim_Item'>26:</span>
          <span className='tim_Item'>13</span>
        </div>

        <div>
          <span className='item'>дней</span> 
          <span className='item'>часов</span>
          <span className='item'>минут</span>
          <span className='item'>секунд</span>
        </div>
      </div>
    </div>
  );
}
