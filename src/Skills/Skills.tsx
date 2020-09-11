import React from "react";
import style from './Skills.module.scss';
import container from './../common/styles/Container.module.css'
import Skill from "./Skill/Skill";
import Title from "../common/components/title/Title";
import {faAddressCard, faDesktop, faGamepad} from "@fortawesome/free-solid-svg-icons";


function Skills() {
    return (
        <div className={style.skillsBlock} id="skills">
            <div className={`${container.container} ${style.skillsContainer}`}>
                <Title title='Skills' />
                <div className={style.skills}>
                    <Skill title={'JS'} description={'Lorem ipsum dolor sit ameg elit. Itaque, praesentium?'} icon={faAddressCard}/>
                    <Skill title={'React'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, praesentium?'}
                           icon={faDesktop}/>
                    <Skill title={'Angular'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci atque \n' +
                    '                    consequatur culpa doloribus eum eveniet exercitationem \n' +
                    '                    explicabo facere inventore laborum, nam nesciunt pariatur quo reprehenderit tempore.'}
                           icon={faGamepad}
                    />

                </div>

            </div>
        </div>
    )
}

export default Skills;