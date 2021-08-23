import React, { useState } from "react";
import { ReactComponent as Logo } from "../../assets/icon/logo.svg";
import { ReactComponent as Person } from "../../assets/icon/person.svg";
import { ReactComponent as Menu } from "../../assets/icon/burgerMenu.svg";
import { ReactComponent as Close } from "../../assets/icon/close.svg";
import "./navigation.css";

export default function Navigation() {
  const [openBurgerMenu, setOpenBurgerMenu] = useState(false);
  return (
    <div className="navigation_Box">
      <div className='nav_Wrapper'>
      <nav>
        <Logo />
        <div className="navigatin_Text_Item_Block">
          <ul>
            <li>Об акции</li>
            <li>Правила</li>
            <li>Призовой фонд</li>
            <li>Победители</li>
          </ul>
        </div>
        <div className="navigation_Login_Item_Block">
          <Person />
          <button>Вход / Регистрация</button>
        </div>
        <div className="burger_Menu_Block">
          {openBurgerMenu ? (
            <Close onClick={() => setOpenBurgerMenu(!openBurgerMenu)} />
          ) : (
            <Menu onClick={() => setOpenBurgerMenu(!openBurgerMenu)} />
          )}
          {openBurgerMenu && (
            <div className="burger_Menu_OptionS-Block">
              <ul>
                <li>Об акции</li>
                <li>Правила</li>
                <li>Призовой фонд</li>
                <li>Победители</li>
                <li>Вход / <br/>Регистрация</li>
              </ul>
            </div>
          )}
        </div>
      </nav>
      </div>
    </div>
 
  );
}
