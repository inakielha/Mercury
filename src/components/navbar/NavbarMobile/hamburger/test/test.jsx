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
        <div className={s.section} style={isOpen === id ? { backgroundColor: "#CCCCCC" } : {}} onClick={() => toggleAccordion(id)}>
            <div className={s.accordion}>
                <div className={s.tituloText} style={isOpen === id ? { color: "#000000",borderBottom: "2px solid #7070709d",padding:"0.5em 0" } : {}} onClick={() => toggleAccordion(id)}>
                    <span>
                        {titulo}
                    </span>
                    {isOpen === id ? <IoIosArrowDown /> : <IoIosArrowUp />}
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
