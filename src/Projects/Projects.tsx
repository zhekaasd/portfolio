import React from "react";
import style from './Projects.module.scss';
import container from './../common/styles/Container.module.css';
import Title from "../common/components/title/Title";
import imageOne from './../assets/image/chip_protsessor_mikroshema_145282_800x600.jpg';
import imageTwo from './../assets/image/znaki_voprosa_3d_formy_112826_800x600.jpg';
import Project from "./Project/Project";


export type stylePropsType = {
    color: string
    backgroundImage: string
}

function Projects() {
    const nameOne = {
        color: 'blue',
        backgroundImage: 'url(' + imageOne + ')',
    };

    const nameTwo = {
        color: 'blue',
        backgroundImage: `url(${imageTwo})`,
    };



    return(
        <div className={style.projectsBlock} id="projects">
            <div className={`${container.container} ${style.projectsContainer}`}>
                <Title title='Projects' />
                <div className={style.projects}>
                    <Project style={nameOne} title={'Asddfgd ewfklsk'} description={"Lorem ipsum dolor ipsum dolor sit amet sit amet, consectetur adipisicing elit."}/>
                    <Project style={nameTwo} title={'Qwqewet khkfg'} description={"Lorem ipsum consectetur adipisicing elit."}/>
                </div>
            </div>
        </div>
    )
}

export default Projects;