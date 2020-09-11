import React from "react";
import style from './Project.module.scss'
import {stylePropsType} from "../Projects";



type ProjectPropsType = {
    style: stylePropsType
    title: string
    description: string
}


function Project(props: ProjectPropsType) {
    return(
        <div className={style.project}>
            <div className={style.image} style={props.style}>
                <a href="#" className={style.viewBtn}>Asdghj</a>
            </div>
            <div className={style.projectInfo}>
                <h3 className={style.projectTitle}>{props.title}</h3>
                <span className={style.description}>{props.description}</span>
            </div>
        </div>
    )
}

export default Project;