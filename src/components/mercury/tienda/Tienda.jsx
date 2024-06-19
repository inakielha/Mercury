import { useReducer, useState } from "react";
import Postal from "./postal/Postal";
import Productos from "./productos/Productos";
import Promos from "./promos/Promos";
import Form from "./form/Form";
import Registrarse from "./registrarse/Registrarse";

export default function Tienda({ setMobileMenu, mobileMenu }) {
  const [form, setForm] = useState(false)
  const [register, setRegister] = useState(false)

  return (
    <div style={{ position: "relative" }}>
      {mobileMenu === "show" && <div onClick={() => setMobileMenu("hide")} style={{ zIndex: "2", position: "absolute", width: "100%", height: "100%", backgroundColor: "#000000a3" }}></div>}
      {form && <div onClick={() => setForm(false)} style={{ zIndex: "2", position: "absolute", width: "100%", height: "100%", backgroundColor: "#000000a3" }}></div>}
      {register && <div onClick={() => setRegister(false)} style={{ zIndex: "2", position: "absolute", width: "100%", height: "100%", backgroundColor: "#000000a3" }}></div>}
      <Postal setForm={setForm} setRegister={setRegister} />
      <Promos />
      <Productos />
      {form &&
        <Form setForm={setForm} setRegister={setRegister}/>
      }
      {register &&
        <Registrarse setRegister={setRegister} setForm={setForm}/>
      }
    </div>
  );
}
