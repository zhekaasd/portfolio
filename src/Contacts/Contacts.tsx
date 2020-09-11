import React from "react";
import style from './Contacts.module.scss';
import container from './../common/styles/Container.module.css';
import Title from "../common/components/title/Title";


function Contacts() {
    return (
        <div className={style.contactsBlock} id="contact">
            <div className={`${container.container} ${style.contactsContainer}`}>
                <div className={style.wrapperContacts}>
                    <Title title={'Contacts'}/>
                    <form className={style.contactsForm} action="">
                        <input type="text" placeholder={'Name'}/>
                        <input type="text" placeholder={'E-mail'}/>
                        <textarea placeholder={'Your message'}/>
                        <button type='submit' className={style.submitBtn}>Waasdawd</button>
                    </form>
                </div>

            </div>

        </div>

    )
}

export default Contacts;