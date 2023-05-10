import React from 'react';
import contentheader from "./_content_header.module.scss";
const ContentHeader = () => {
    return (
        <>
        <div className={contentheader.topheader}>офисы: open space</div>
        <div className={contentheader.container}>
            <div className={contentheader.textcontainer}>
                <div className={contentheader.header}>офисы: open space</div>
                <div className={contentheader.downloadlink}>скачать буклет<div className={contentheader.downloadlinkbutton}/></div>
                <div className={contentheader.text}>Open space – самый распространенный тип планировки офисного пространства. Он наиболее рентабелен с точки зрения затрат на аренду офисной площади и стоимости технического оснащения, однако имеет и ряд недостатков, которые, впрочем, могут быть нивелированы за счет правильного освещения.</div>
            </div>
            <div className={contentheader.photocontainer}></div>
        </div>
            </>
    );
};

export default ContentHeader;