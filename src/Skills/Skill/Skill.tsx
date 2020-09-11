import React from "react";
import style from './Skill.module.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


type SkillPropsType = {
    icon: any
    title: string
    description: string
}


function Skill(props: SkillPropsType) {
    return (

        <div>
            <div className={style.skill}>
                <div className={style.iconBlock}>
                    <FontAwesomeIcon icon={props.icon} className={style.icnPosition}/>
                </div>

                <div className={style.iconTextBox}>
                    <h3 className={style.iconTitle}>{props.title}</h3>
                    <span className={style.skillsDescription}>
                    {props.description}
                </span>
                </div>
            </div>
        </div>

    )
}



export default Skill;