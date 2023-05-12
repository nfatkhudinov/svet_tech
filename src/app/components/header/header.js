'use client'

import React, {useState} from 'react';
import header from "./_header.module.scss";
import Logo from "@/app/components/header/logo/logo";
import Button_search from "@/app/components/header/button_search/button_search";
import Button_lang from "@/app/components/header/button_lang/button_lang";
import Button_like from "@/app/components/header/button_like/button_like";
import Topmenu from "@/app/components/header/topmenu/topmenu";
import Button_burger from "@/app/components/header/button_burger/button_burger";
import Burger from "@/app/components/header/burger/burger";

const Header = () => {

    const [burgerFlag, setBurgerFlag] = useState(false)

    return (
        <>
        <div className={header.container}>
            <div className={header.buttonBurger} onClick={()=>setBurgerFlag(!burgerFlag)}><Button_burger/></div>
            <div className={header.logo}><Logo/></div>
            <div className={header.topmenu}><Topmenu/></div>

            <div className={header.buttonSearch}> <Button_search/></div>
            <div className={header.buttonLang}><Button_lang/></div>
            <div className={header.buttonLike}><Button_like/></div>
        </div>
        <Burger showFlag={burgerFlag}/>
        </>
    );
};

export default Header;