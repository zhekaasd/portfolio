import React from "react";
import style from './Working.module.scss';
import container from './../common/styles/Container.module.css';
import Title from "../common/components/title/Title";


/*не переносится заголовок*/

function Working() {
    return (
        <div className={style.workingBlock}>
            <div className={`${container.container} ${style.workingContainer}`}>
                <Title title={'Lorem ipsum elit '} />
                <button className={style.workingBtn}>Lorem ipsum</button>
            </div>
        </div>
    )
}

export default Working;