import React, { useState } from 'react';
import s from './acordion.module.css'; // Importa tu archivo de estilos CSS para personalizar el acordeón
import { IoIosSearch, IoIosArrowDown, IoIosArrowUp } from "react-icons/io";


const Accordion = ({ titulo, arrlink, id, setIsOpen, isOpen }) => {

    const toggleAccordion = (id) => {
        if (isOpen === id) {
            setIsOpen("")
        } else {
            setIsOpen(id);
        }
    };

    return (
        <div className={s.section} style={isOpen === id ? { backgroundColor: "#a4a4a4" } : {}} onClick={() => toggleAccordion(id)}>
            <div className={s.accordion}>
                <div className={s.tituloText}  onClick={() => toggleAccordion(id)}    style={isOpen === id ? {borderColor: "#86b7fe", boxShadow: "0 0 0 .25rem rgba(13, 110, 253, .25)" } : {}}>
                {/* <div className={s.tituloText} style={isOpen === id ? { color: "#000000",borderBottom: "2px solid #7070709d",padding:"0.5em 0" } : {}} onClick={() => toggleAccordion(id)}> */}
                    <span>
                        {titulo}
                    </span>
                    {isOpen === id ? <IoIosArrowUp  className={s.icon}/> : < IoIosArrowDown className={s.icon}/>}
                </div>
                <div className={s.txtCont}>
                    {isOpen === id && (
                        arrlink.map((info) => {
                            return (
                                <div onClick={() => window.location.href = info.url}>
                                    <span className={s.texto} >
                                        {info.text}
                                    </span>
                                </div>
                            )
                        })
                    )}
                </div>
            </div>
        </div>
    );
};

export default Accordion;
