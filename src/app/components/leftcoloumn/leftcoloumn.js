import React from 'react';
import leftcoloumn from "./_leftcoloumn.module.scss";
const Leftcoloumn = () => {
    return (
        <div className={leftcoloumn.container}>
            <div className={leftcoloumn.header}>
                <div className={leftcoloumn.headerArrow}/>
                <div className={leftcoloumn.headerText}>световые решения</div>
            </div>
            <a className={leftcoloumn.active} href="/#">описание</a>
            <a href="/#">подробнее</a>
            <a href="/#">идеи</a>
            <a href="/#">задачи</a>
            <a href="/#">свет, который мотивирует</a>
            <a href="/#">рекомендуемые товары</a>
            <a href="/#">связаться с нами</a>
            <a href="/#">проекты</a>
        </div>
    );
};

export default Leftcoloumn;