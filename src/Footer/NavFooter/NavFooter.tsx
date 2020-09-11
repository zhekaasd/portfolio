import React from 'react';
import style from './navFooter.module.scss'


type NavFooterPropsType = {
    icon: string
}

function NavFooter(props: NavFooterPropsType) {
    return <a href=""> <img className={style.icon} src={props.icon} alt="icon"/></a>
}


export default NavFooter;