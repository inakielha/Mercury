import motor1 from "../../../../../assets/mercury/motores/cuatroTempos/detalles/Imagen 312.png"
import motor2 from "../../../../../assets/mercury/motores/cuatroTempos/detalles/Imagen 311.png"
import seapro from "../../../../../assets/mercury/motores/seaPro/detalles/Imagen 314.png"
import seapro1 from "../../../../../assets/mercury/motores/seaPro/detalles/Imagen 313.png"
import seapro2 from "../../../../../assets/mercury/motores/seaPro/detalles/Imagen -1.png"
import verado from "../../../../../assets/mercury/motores/verado/detalle/verado.png"
import dosTempos from "../../../../../assets/mercury/motores/dosTempos/detalles/NoPath - copia (3).png"
import dosTempos2 from "../../../../../assets/mercury/motores/dosTempos/detalles/NoPath - copia (4).png"
import racing from "../../../../../assets/mercury/motores/racing/detalles/motor.png"

export const cuatroTemposInfo = [
    {
        id: "3.5 M 4S",
        nombre: "3.5 M 4S",
        caracteristicas: `hp / kW: 3.5 / 2.6\n Tipo de motor: 1 cilindro\nDesplazamiento (CID/ CC): 	5.2 / 85\nEmpuje total (RPM): 5000-6000\nLongitud de pata: 15" / 381 mm | 20" / 508 mm\nProporción de la caja de engranajes: 2.15:1`,
        imagen: motor1,
        imagenDimension: "80%",
        slides: 3.8
    },
    {
        id: "5M/ ML 4S",
        nombre: "5 M 4S",
        caracteristicas: `hp / kW:5/3.7\n
        Tipo de motor: 1 cilindro\n
        Desplazamiento (CID/ CC): 	7.5 / 123\n 
        Empuje total (RPM): 4500 - 5500\n
        Longitud de pata: 15" / 381mm | 25" / 635mm\n
        Proporción de la caja de engranajes: 2.15:1\n
        `,
        imagen: motor2,
        imagenDimension: "80%"
    },
    {
        id: "9.9 M/ ML 4S",
        nombre: "9.9 M/ ML 4S",
        caracteristicas: `hp / kW:5/3.7\n
        Tipo de motor: 1 cilindro\n
        Desplazamiento (CID/ CC): 	7.5 / 123\n 
        Empuje total (RPM): 4500 - 5500\n
        Longitud de pata: 15" / 381mm | 25" / 635mm\n
        Proporción de la caja de engranajes: 2.15:1\n
        `,
        imagen: motor2,
        imagenDimension: "80%"
    },
    {
        id: "15 M/ ML 4S",
        nombre: "15 M/ ML 4S",
        caracteristicas: `hp / kW:5/3.7\n
        Tipo de motor: 1 cilindro\n
        Desplazamiento (CID/ CC): 	7.5 / 123\n 
        Empuje total (RPM): 4500 - 5500\n
        Longitud de pata: 15" / 381mm | 25" / 635mm\n
        Proporción de la caja de engranajes: 2.15:1\n
        `,
        imagen: motor2,
        imagenDimension: "80%"
    },
]

export const seaProInfo = [
    {
        id: "60 ELPT 4S SP",
        nombre: "60 ELPT 4S SP",
        caracteristicas: `hp / kW: 60 / 45\n
        Tipo de motor: en línea 4\n
        Desplazamiento (CID/ CC): 	61 / 995\n
        Empuje total (RPM): 4500 - 5500\n
        Longitud de pata: 20" / 508mm | 22.5" 572mm\n
        Proporción de la caja de engranajes: 2.33:1`,
        imagen: seapro2
        ,
        imagenDimension: "50%",
        slides: 3.8
    },
    {
        id: "60 ELPT 4S BT SP",
        nombre: "60 ELPT 4S BT SP",
        caracteristicas: `hp / kW: 60 / 45\n
        Tipo de motor: en línea 4\n
        Desplazamiento (CID/ CC): 	61 / 995\n
        Empuje total (RPM): 4500 - 5500\n
        Longitud de pata: 20" / 508mm | 22.5" 572mm\n
        Proporción de la caja de engranajes: 2.33:1\n
        `,
        imagen: seapro1,
        imagenDimension: "50%"
    },
    {
        id: "75 ELPT 4S SP",
        nombre: "75 ELPT 4S SP",
        caracteristicas: `hp / kW: 75 / 56\n
        Tipo de motor: en línea 4\n
        Desplazamiento (CID/ CC): 	2.1 L\n
        Empuje total (RPM): 5000 - 5500\n
        Longitud de pata: 20" / 508mm\n
        Proporción de la caja de engranajes: 2.38:1
        `,
        imagen: seapro,
        imagenDimension: "50%"
    },

]


export const veradoInfo = [
    {
        id: "250 Hp",
        nombre: "60 ELPT 4S SP",
        caracteristicas: `hp / kW: 250 / 186\n
        Tipo de motor: V8\n
        Desplazamiento (CID/ CC): 279 CID/ 4.6 L\n
        Empuje total (RPM): 5200 - 6000\n
        Longitud de pata:20" / 508mm | 25" / 635mm | 30"\n 
        Proporción de la caja de engranajes: 1.85:1`,
        imagen: verado
        ,
        imagenDimension: "50%",
        slides: 3.8
    },
    {
        id: "300 Hp",
        nombre: "60 ELPT 4S BT SP",
        caracteristicas: `hp / kW: 60 / 45\n
        Tipo de motor: en línea 4\n
        Desplazamiento (CID/ CC): 	61 / 995\n
        Empuje total (RPM): 4500 - 5500\n
        Longitud de pata: 20" / 508mm | 22.5" 572mm\n
        Proporción de la caja de engranajes: 2.33:1\n
        `,
        imagen: verado,
        imagenDimension: "50%",
    },
    {
        id: "600 Hp",
        nombre: "75 ELPT 4S SP",
        caracteristicas: `hp / kW: 75 / 56\n
        Tipo de motor: en línea 4\n
        Desplazamiento (CID/ CC): 	2.1 L\n
        Empuje total (RPM): 5000 - 5500\n
        Longitud de pata: 20" / 508mm\n
        Proporción de la caja de engranajes: 2.38:1
        `,
        imagen: verado,
        imagenDimension: "50%"
    },
]


export const dosTemposInfo = [
    {
        id: "3.3 M",
        nombre: "3.3 M",
        caracteristicas: `hp / kW: 3.3 / 2.5\n
        Encendido: Manual\n
        Configuración del cilindro: 	1\n
        Empuje total (RPM): 4500 - 5500\n
        Longitud de pata: 15" / 381mm\n
        Proporción de la caja de engranajes: 2.15:1`,
        imagen: dosTempos,
        imagenDimension: "50%",
        slides: 3
    },
    {
        id: "5M/ ML",
        nombre: "5M/ ML",
        caracteristicas: `hp / kW: 5/3.7\n
        Encendido: Manual\n
        Configuración del cilindro: 	1\n
        Empuje total (RPM): 4000 - 5000\n
        Longitud de pata: 15" / 381mm | 20" / 508mm\n
        Proporción de la caja de engranajes: 2.15:1`,
        imagen: dosTempos2,
        imagenDimension: "50%"
    },
]



export const racinInfo = [
    {
        id: "450R hp",
        nombre: "450R hp",
        caracteristicas: `hp / kW: 450\n
        Desplazamiento (CID/ CC): 279 CID / 4.6L\n
        Empuje total (RPM): 5800-6400\n
        Proporción de la caja de engranajes: 1.60:1\n
        Ignición: SmartCraft PCM 112 Digital Inductive\n
        Encendido: SmartStart Electric`,
        imagen: racing,
        imagenDimension: "50%",
        slides: 2
    }
]