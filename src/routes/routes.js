import { deployRoute } from "../pathImages";

export const routes = [
  { name: 'Motores', path: deployRoute + "motores" },
  { name: 'Sist. Integral de Propulsión', path: deployRoute + 'propulsion', redirect: false },
  { name: 'REPUESTOS Y ACCESORIOS', path: deployRoute + 'respuestos-accesorios', redirect: true },
  { name: 'Concesionarios y Servicios', path: deployRoute + 'concesionarios', redirect: false },
  { name: 'CIRCULARES', path: deployRoute + 'informacion', redirect: false },
]