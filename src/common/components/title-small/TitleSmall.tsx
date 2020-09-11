import React from "react";
import style from './TitleSmall.module.scss';
import {TitlePropsType} from "../title/Title";


function TitleSmall(props:TitlePropsType) {
    return (
        <div className={style.title}>
            <h2>{props.title}</h2>
        </div>
    )
}

export default TitleSmall;