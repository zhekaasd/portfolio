import React from 'react';
import style from './main.module.scss';
import photo from './../assets/photo/kinopoisk.ru-Logan-29156492222.jpg';




function Main() {
    return (
        <div className={style.mainBlock}>
            <div className={style.mainContainer}>
                <div className={style.mainPhoto}>
                    <img src={photo} alt="asdf"/>
                </div>
                <div className={style.intro}>
                    <h1>My name is Lev Tolstoy</h1>
                    <p>I am front-end muden</p>
                </div>
            </div>
        </div>

    );
}

export default Main;