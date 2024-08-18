// import * as React from 'react';
// import Accordion from '@mui/material/Accordion';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import Typography from '@mui/material/Typography';
// import { IoIosSearch, IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
// import s from "./accordion.module.css"
// import { ThemeProvider } from '@emotion/react';
// import { createTheme } from '@mui/material';


// export default function BasicAccordion({ titulo, arrlink, i }) {

//     const theme = createTheme({
//         typography: {
//             h6: {
//               fontSize: '18px',
//             },
//           },
//         components: {
//             // Name of the component
//             MuiAccordion: {
//         styleOverrides: {
//             // Name of the slot
//             disabled: {
//                 // Some CSS
//                 border: 'none',
//                     padding: "0",
//                         margin: "0",
//                             height: "auto",
//                             backgroundColor: "green",

//             },
//         },
//     },
// },
//       });


// return (
//     <ThemeProvider theme={theme}>
//         <Accordion style={i ? { backgroundColor: "red" } : {}} elevation={0} className={s.accordion} >
//             <AccordionSummary
//                 expandIcon={<IoIosArrowDown />}
//                 aria-controls="panel1a-content"
//                 id="panel1a-header"

//             >
//                 {/* <span style={{fontSize:"60px"}} className={s.tituloText}>{titulo}</span> */}
//                 {/* <Typography style={{fontSize:"18px"}} className={s.tituloText}>{titulo}</Typography> */}
//             </AccordionSummary>
//             {arrlink.length && arrlink.map((info) => {
//                 return (
//                     <AccordionDetails onClick={() => window.location.href = info.url}>
//                         <Typography variant='h6' className={s.texto} style={{fontSize:"18px"}}>
//                             {info.text}
//                         </Typography>
//                     </AccordionDetails>
//                 )
//             })}
//         </Accordion>
//     </ThemeProvider>

// );
// }




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
    console.log(isOpen)
    return (
        <div className={s.section} style={isOpen === id ? { backgroundColor: "#a4a4a4" } : {}} onClick={() => toggleAccordion(id)}>
            <div className={s.accordion}>
                <div className={s.tituloText} onClick={() => toggleAccordion(id)} style={isOpen === id ? { borderColor: "#86b7fe", boxShadow: "0 0 0 .25rem rgba(13, 110, 253, .25)" } : {}}>
                    {/* <div className={s.tituloText} style={isOpen === id ? { color: "#000000",borderBottom: "2px solid #7070709d",padding:"0.5em 0" } : {}} onClick={() => toggleAccordion(id)}> */}
                    <span>
                        {titulo}
                    </span>
                    {isOpen === id ? <IoIosArrowUp color='white' className={s.icon} /> : < IoIosArrowDown color='white' className={s.icon} />}
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
