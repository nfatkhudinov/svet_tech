import React from 'react';
import buttonswithpicture from "./_content.buttonswithpicture.module.scss";
import Button from "@/app/components/content_buttonswithpicture/button/button";
const ContentButtonwithpicture = () => {
    return (
        <div className={buttonswithpicture.container}>
            <div className={buttonswithpicture.header}>идеи для ваших<br/>проектов</div>
            <div className={buttonswithpicture.buttongroup}>
                <Button name={"общее пространство"} active={true}/>
                <Button name={"переговорка"}/>
                <Button name={"холл"}/>
            </div>
        </div>
    );
};

export default ContentButtonwithpicture;