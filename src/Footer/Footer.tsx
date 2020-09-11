import React from 'react';
import style from './Footer.module.scss'
import NavFooter from "./NavFooter/NavFooter";
import inst from "./../assets/icon/instagram.svg";
import twt from "./../assets/icon/twitter.svg";
import fcb from "./../assets/icon/facebook.svg";
import whts from "./../assets/icon/whatsapp (2).svg";
import TitleSmall from "../common/components/title-small/TitleSmall";





function Footer() {
    return(
        <footer className={style.footerBlock}>
            <div className={style.footerContainer}>
                <TitleSmall title={'Linksdghws'} />
                <div className={style.navItems}>
                    <NavFooter icon={inst} />
                    <NavFooter icon={twt} />
                    <NavFooter icon={fcb} />
                    <NavFooter icon={whts} />
                    <NavFooter icon={inst} />

                </div>
                <div className={style.footerSpan}>
                    <span>© 2019 beingeorge, All Rights Reserved.</span>
                </div>
            </div>
        </footer>
    )
}


export default Footer;