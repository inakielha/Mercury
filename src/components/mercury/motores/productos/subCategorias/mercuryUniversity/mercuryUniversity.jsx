import s from "../../ProductosMotores.module.css"

export default function MercuryUniversity() {
  return (
    <>
      <div className={s.informacionCont}>
        <div className={s.informacion}>
          <h3>Mercury University</h3>
          <h4>Requisitos para la presentación de nuevos mecánicos</h4>
          <ul>
            <li>. Apellido, nombre y DNI</li>
            <li>. Teléfono de contacto permanente.</li>
            <li>. Dirección de taller y localización en Google Maps.</li>
            <li>. Indicar taller propio o de terceros</li>
            <li>. Antigüedad en la zona</li>
            <li>
              . Aceptación de Tarifas Oficiales establecidas por el Fabricante
            </li>
            <li>. Indicar si es Monotributista o Sociedad (indicar CUIT)</li>
            <li>. Puesto dentro de la organización.</li>
            <li>
              A: En relación de dependencia ( indicar empleador y Antigüedades
              con el mismo )
            </li>
            <li>B : Por cuenta propia indicar antigüedad</li>
            <li>. Fotografía exterior en interior del taller.</li>
            <li>. Fotocarnet personal</li>
            <li>
              . Presentar recomendación de los Astilleros/Prefectura/Mecánico ya
              autorizado.
            </li>
            <li>
              . Indicar a que distancia de su locación està dispuesto a
              trasladarse.
            </li>
            <li>
              . Indicar si está en capacidad de mantener guardia los fines de
              semana / Urgencias.
            </li>
            <li>
              . Indicar que vehículo posee para identificar corporativamente.
            </li>
          </ul>
          <p>
            Enviar solicitud por mail a <span>info@navalmotor.com </span>
            De ser seleccionado se le informará fechas, modalidad y condiciones
            de los cursos en español.
          </p>
        </div>
      </div>
    </>
  )
}