import React from 'react';
import button from "./button.module.scss"
import classNames from "classnames";

const Button = (props) => {
    return (
        <button className={`${button.bubble} ${props.active? button.active : ''}`}>{props.name}</button>
    );
};

export default Button;