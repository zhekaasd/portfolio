import React from 'react';
import style from './nav.module.scss'


function Nav() {
    return (
        <div className={style.nav}>
            <a href="#home">Home</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
        </div>
    )
}

export default Nav;