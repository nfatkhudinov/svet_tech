import React from 'react';
import footer from "./_footer.module.scss";
const Footer = () => {
    return (
        <div className={footer.container}>
            <div className={footer.coloumn}>
                <div className={footer.header}>каталог</div>
                <a href="/#">Каталог</a>
                <a href="/#">Избранное</a>
                <a href="/#">Решения</a>
                <a href="/#">Портфолио</a>
            </div>
            <div className={footer.coloumn}>
                <div className={footer.header}>информация</div>
                <a href="/#">О компании</a>
                <a href="/#">Карьера</a>
                <a href="/#">Новости</a>
                <a href="/#">Дистрибьюторы</a>
                <a href="/#">Контакты</a>
            </div>
            <div className={footer.coloumn}>
                <div className={footer.header}>обучающий центр</div>
                <a href="/#">Вебинары</a>
                <a href="/#">Семинары</a>
                <a href="/#">Курсы</a>
            </div>
            <div className={footer.coloumn}>
                <div className={footer.header}>8 (800) 333-23-77</div>
                <div className={footer.text}>Бесплатная горячая линия</div>
                <div className={footer.buttons}>
                    <button className={footer.buttonVk}/>
                    <button className={footer.buttonYoutube}/>
                    <button className={footer.buttonTelegram}/>
                    <button className={footer.buttonDzen}/>
                </div>
                <div className={footer.header}>контакты</div>
                <div className={footer.text}>info@msk.LTcompany.com</div>
                <div className={footer.text}>127273, г.Москва, ул. Отрадная, 2Б, стр.7</div>
            </div>
        </div>
    );
};

export default Footer;