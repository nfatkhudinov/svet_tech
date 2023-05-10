import React from 'react';
import topmenu from "./_topmenu.module.scss"
const Topmenu = () => {
    return (
        <div className={topmenu.container}>
            <a className={topmenu.active} href="/#">Каталог</a>
            <a href="/#">Решения</a>
            <a href="/#">Учебный центр</a>
            <a href="/#">Услуги</a>
            <a href="/#">О компании</a>
            <a href="/#">Портфолио</a>
            <a href="/#">Дистрибьюторы</a>
        </div>
    );
};

export default Topmenu;