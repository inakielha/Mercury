import * as React from 'react';

import s from "./MenuMobile.module.css"
import Accordion from "../accordion/Acordion"
import { AiOutlineClose } from "react-icons/ai"
import navalMenu from "/navbar/logo-naval.png"
import Drawer from '@mui/material/Drawer';
import { pathImages } from '../../../pathImages';



export default function MenuMobile({ setMobileMenu, show }) {
    const [isOpen, setIsOpen] = React.useState("");
    let embarcaciones = [{ text: "searay", url: "https://www.navalmotor.com/searay" }, { text: "jeanneau", url: "https://www.navalmotor.com/jeanneau" }, { text: "chriscraft", url: "https://www.navalmotor.com/chriscraft" }, { text: "williams", url: "https://www.navalmotor.com/williams" }, { text: "yacht-club", url: "https://www.navalmotor.com/yacht-club" }, { text: "zodiac", url: "https://www.navalmotor.com/zodiac" }, { text: "levefort", url: "https://www.navalmotor.com/levefort" }, { text: "lowe", url: "https://www.navalmotor.com/lowe" }, { text: "bostonwhaler", url: "https://www.navalmotor.com/bostonwhaler" }]
    return (
        <>
            <ul className={s.nav_mobile + " " + s[show]}>
                <li className={s.closeLogos}>
                    <AiOutlineClose size={"2em"} onClick={() => setMobileMenu("hide")} />
                    <div className={s.logoMenu}><img onClick={() => window.location.href = "https://www.navalmotor.com/"} src={pathImages + navalMenu} alt="logo" /></div>
                </li>
                <div className={s.container}>
                    <Accordion id={1} isOpen={isOpen} setIsOpen={setIsOpen} titulo={"PROPULSIÓN FUERA DE BORDA"} arrlink={[{ text: "MERCURY", url: "https://www.navalmotor.com/mercury" }]} />
                    <Accordion id={2} isOpen={isOpen} setIsOpen={setIsOpen} titulo={"PROPULSIÓN INTERNA"} arrlink={[{ text: "VOLVO PENTA", url: "https://www.navalmotor.com/volvo-penta-propulsion" }, { text: "MITSUBISHI", url: "https://www.navalmotor.com/mitsubishi" }, { text: "kongsberg", url: "https://www.kongsberg.com/" }]} />
                    <Accordion id={3} isOpen={isOpen} setIsOpen={setIsOpen} titulo={"MOVILIDAD"} arrlink={[{ text: "POLARIS", url: "https://www.navalmotor.com/polaris" }, { text: "CLUB CAR", url: "https://www.navalmotor.com/clubcar" }]} />
                    <Accordion id={4} isOpen={isOpen} setIsOpen={setIsOpen} titulo={"EMBARCACIONES"} arrlink={embarcaciones} />
                    <div className={s.tituloText} onClick={() => window.open("https://www.clubdeyatesnaval.com/","_blank")}>CLUB YATES</div>
                    <div className={s.tituloText} onClick={() => window.location.href = "https://www.navalmotor.com/novedades"}>NOVEDADES</div>
                    <div className={s.tituloText} onClick={() => window.location.href = "https://www.navalmotor.com/#solucionesMobile"}>SOLUCIONES</div>
                    <div className={s.tituloText} onClick={() => window.location.href = "https://www.navalmotor.com/#garantias"}>GARANTIA</div>
                </div>

            </ul>
            <div>
                <React.Fragment key={"left"}>
                    <Drawer
                        style={{ zIndex: 499 }}
                        anchor={"left"}
                        open={show === "show"}
                        onClose={() => setMobileMenu("hide")}
                    >
                        <div style={{ display: "none" }}></div>
                    </Drawer>
                </React.Fragment>
            </div>
        </>
    )
}