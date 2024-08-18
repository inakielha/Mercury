// import * as React from 'react';
// import Drawer from '@mui/material/Drawer';
// import s from "./side.module.css"
// import Accordion from '../test/test';


// export default function Sidebar({ open, close }) {
//     const [isOpen, setIsOpen] = React.useState("");
//     let embarcaciones = [{ text: "searay", url: "https://www.navalmotor.com/searay" },{ text: "zar formenti", url: "https://www.navalmotor.com/zar-formenti" }, { text: "jeanneau", url: "https://www.navalmotor.com/jeanneau" },{text:"chriscraft",url:"https://www.navalmotor.com/chriscraft" },{text:"williams",url:"https://www.navalmotor.com/williams" },{text:"yacht-club",url:"https://www.navalmotor.com/yacht-club" },{text:"zodiac",url:"https://www.navalmotor.com/zodiac" },{text:"levefort",url:"https://www.navalmotor.com/levefort" },{text:"lowe",url:"https://www.navalmotor.com/lowe" },{text:"bostonwhaler",url:"https://www.navalmotor.com/bostonwhaler" }]


//     const list = () => (
//         <div className={s.container}>
//             <Accordion style={isOpen === 1 ? { backgroundColor: "#CCCCCC" } : {}} id={1} isOpen={isOpen} setIsOpen={setIsOpen} titulo={"PROPULSIÓN FUERA DE BORDA"} arrlink={[{ text: "MERCURY", url: "https://www.navalmotor.com/mercury" }]} i={true} />

//             <Accordion style={isOpen === 2 ? { backgroundColor: "#CCCCCC" } : {}} id={2} isOpen={isOpen} setIsOpen={setIsOpen} titulo={"PROPULSIÓN INTERNA"} arrlink={[{ text: "VOLVO PENTA", url: "https://www.navalmotor.com/volvo-penta-propulsion" }, { text: "MITSUBISHI", url: "https://www.navalmotor.com/mitsubishi" }, { text: "kongsberg", url: "https://www.kongsberg.com/" }]} />

//             <Accordion style={isOpen === 3 ? { backgroundColor: "#CCCCCC" } : {}} id={3} isOpen={isOpen} setIsOpen={setIsOpen} titulo={"MOVILIDAD"} arrlink={[{ text: "POLARIS", url: "https://www.navalmotor.com/polaris" },{ text: "ECOOTER", url: "https://www.navalmotor.com/ecooter" }, { text: "CLUB CAR", url: "https://www.navalmotor.com/clubcar" }]} />

//             <Accordion style={isOpen === 4 ? { backgroundColor: "#CCCCCC" } : {}} id={4} isOpen={isOpen} setIsOpen={setIsOpen} titulo={"EMBARCACIONES"} arrlink={embarcaciones} />

//             <div className={s.tituloText} onClick={() => window.open("https://www.clubdeyatesnaval.com/","_blank")}>CLUB YATES</div>
//             <div className={s.tituloText} onClick={() => window.location.href = "https://www.navalmotor.com/novedades"}>NOVEDADES</div>
//             <div className={s.tituloText} onClick={() => window.location.href = "https://www.navalmotor.com/#soluciones"}>SOLUCIONES</div>
//             <div className={s.tituloText} onClick={() => window.location.href = "https://www.navalmotor.com/#garantias"}>GARANTIA</div>
//         </div>

//     );

//     return (
//         <div className={s.mobile}>
//             <React.Fragment key={"left"}>
//                 <Drawer
//                     anchor={"left"}
//                     open={open}
//                     onClose={() => close(false)}
//                     className={s.sidebar}
//                 >
//                     {list()}
//                 </Drawer>
//             </React.Fragment>
//         </div>
//     );
// }


import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import s from "./side.module.css"
import Accordion from "../accordion/Acordion";
import { IoMdClose } from "react-icons/io";


export default function Sidebar({ open, close }) {
    const [isOpen, setIsOpen] = React.useState("");
    let embarcaciones = [{ text: "searay", url: "https://www.navalmotor.com/searay" }, { text: "jeanneau", url: "https://www.navalmotor.com/jeanneau" }, { text: "chriscraft", url: "https://www.navalmotor.com/chriscraft" }, { text: "williams", url: "https://www.navalmotor.com/williams" }, { text: "yacht-club", url: "https://www.navalmotor.com/yacht-club" }, { text: "zodiac", url: "https://www.navalmotor.com/zodiac" }, { text: "levefort", url: "https://www.navalmotor.com/levefort" }, { text: "lowe", url: "https://www.navalmotor.com/lowe" }, { text: "bostonwhaler", url: "https://www.navalmotor.com/bostonwhaler" }, { text: "zar-formenti", url: "https://www.navalmotor.com/zar-formenti" }]


    const list = () => (
        <div className={s.container}>
            <div className={s.crossIconCont}>  <IoMdClose className={s.crossIcon} onClick={() => { close(false) }} /></div>
            <div className={s.tituloText} onClick={() => window.open("https://www.navalmotor.com/", "_blank")}><span>INCIO</span></div>
            <div className={s.tituloText} onClick={() => window.open("https://www.navalmotor.com/novedades", "_blank")}><span>NOVEDADES</span></div>

            <Accordion style={isOpen === 1 ? { backgroundColor: "#CCCCCC" } : {}} id={1} isOpen={isOpen} setIsOpen={setIsOpen} titulo={"PROPULSIÓN FUERA DE BORDA"} arrlink={[{ text: "MERCURY", url: "https://www.navalmotor.com/mercury" }]} i={true} />

            <Accordion style={isOpen === 2 ? { backgroundColor: "#CCCCCC" } : {}} id={2} isOpen={isOpen} setIsOpen={setIsOpen} titulo={"PROPULSIÓN INTERNA"} arrlink={[{ text: "VOLVO PENTA", url: "https://www.navalmotor.com/volvo-penta-propulsion" }, { text: "MITSUBISHI", url: "https://www.navalmotor.com/mitsubishi" }, { text: "kongsberg", url: "https://www.kongsberg.com/" }]} />

            <Accordion style={isOpen === 3 ? { backgroundColor: "#CCCCCC" } : {}} id={3} isOpen={isOpen} setIsOpen={setIsOpen} titulo={"MOVILIDAD"} arrlink={[{ text: "POLARIS", url: "https://www.navalmotor.com/polaris" }, { text: "CLUB CAR", url: "https://www.navalmotor.com/clubcar" }, { text: "ECOOTER", url: "https://www.navalmotor.com/ecooter" }]} />

            <Accordion style={isOpen === 4 ? { backgroundColor: "#CCCCCC" } : {}} id={4} isOpen={isOpen} setIsOpen={setIsOpen} titulo={"EMBARCACIONES"} arrlink={embarcaciones} />

            <Accordion style={isOpen === 5 ? { backgroundColor: "#CCCCCC" } : {}} id={5} isOpen={isOpen} setIsOpen={setIsOpen} titulo={"GENERACIÓN"} arrlink={[{ text: "GENERAC", url: "https://www.navalmotor.com/generac" }, { text: "VOLVO PENTA", url: "https://www.navalmotor.com/volvo-penta-generacion" }, { text: "MITSUBISHI", url: "https://www.navalmotor.com/mitsubishi" }]} />



            <Accordion style={isOpen === 6 ? { backgroundColor: "#CCCCCC" } : {}} id={6} isOpen={isOpen} setIsOpen={setIsOpen} titulo={"REPUESTOS Y ACCESORIOS"} arrlink={[{ text: "MERCURY", url: "https://www.navalmotor.net/repuestos/mercury" }, { text: "VOLVO PENTA", url: "https://www.navalmotor.net/repuestos/volvo" }, { text: "POLARIS", url: "https://www.navalmotor.net/repuestos/polaris" }, { text: "GENERAC", url: "https://www.navalmotor.net/repuestos/generac" }]} />


            <Accordion style={isOpen === 7 ? { backgroundColor: "#CCCCCC" } : {}} id={7} isOpen={isOpen} setIsOpen={setIsOpen} titulo={"OPORTUNIDADES"} arrlink={[{ text: "EMBARCACIONES", url: "https://www.navalmotor.com/oportunidades/embarcaciones" }, { text: "GRUPOS ELECTRÓGENOS", url: "https://www.navalmotor.com/oportunidades/generacion" }, { text: "ACCESORIOS MERCURY", url: "https://www.navalmotor.com/oportunidades/mercury-accesorios" }]} />



            <div className={s.tituloText} onClick={() => window.open("https://www.clubdeyatesnaval.com/", "_blank")}><span>CLUB YATES</span></div>
            <div className={s.tituloText} onClick={() => window.location.href = "https://www.navalmotor.com/#soluciones"}><span>SOLUCIONES</span></div>
            <div className={s.tituloText} onClick={() => window.location.href = "https://www.navalmotor.com/la-empresa"}><span>LA EMPRESA</span></div>
            <div className={s.tituloText} onClick={() => window.location.href = "https://www.navalmotor.com/contacto/general"}><span>CONTACTO</span></div>
        </div>

    );

    return (
        <div>
            <React.Fragment key={"left"}>
                <Drawer
                    anchor={"left"}
                    open={open == "show" ? true : false}
                    onClose={() => close(false)}
                    className={s.sidebar}
                    classes={{ paper: s.sidebar }}
                >
                    {list()}
                </Drawer>
            </React.Fragment>
        </div>
    );
}
