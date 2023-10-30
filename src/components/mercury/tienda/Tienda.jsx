import { useReducer } from "react";
import Postal from "./postal/Postal";
import Productos from "./productos/Productos";
import Promos from "./promos/Promos";

export default function Tienda({ setMobileMenu, mobileMenu }) {
  return (
    <div style={{position:"relative"}}>
      {mobileMenu === "show" && <div onClick={() => setMobileMenu("hide")} style={{ zIndex: "2", position: "absolute", width: "100%", height: "100%", backgroundColor: "#000000a3" }}></div>}
      <Postal />
      <Promos />
      <Productos />
    </div>
  );
}
