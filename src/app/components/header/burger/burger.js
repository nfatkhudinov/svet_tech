import React from 'react';
import burger from "./_burger.module.scss"
const Burger = ({showFlag}) => {
    return showFlag? (
        <div className={burger.container}></div>
    ):"";
};

export default Burger;