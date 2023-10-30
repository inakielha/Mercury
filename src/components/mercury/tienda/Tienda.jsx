import { useReducer } from "react";
import Postal from "./postal/Postal";
import Productos from "./productos/Productos";
import Promos from "./promos/Promos";

export default function Tienda({isMobile}) {
  return (
    <>
      <Postal />
      <Promos isMobile = {isMobile} />
      <Productos />
    </>
  );
}
