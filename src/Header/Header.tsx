import React from "react";
import style from './header.module.scss';
import Nav from "./nav/Nav";
import burgerKingLogo from "./../assets/image/burger-king-logo-png--500.png"


function Header() {
    return (
        <div id="home">
            <div className={style.headerContainer}>
                <img src={burgerKingLogo} alt="asdf"/>
                <Nav />
            </div>
        </div>

    )
}

export default Header;