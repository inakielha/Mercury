// import React, { useState } from 'react';
// import s from "./navTest.module.css"
// const SidebarTest = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div>
//       <div id="mySidenav" className="sidenav" style={{ width: isOpen ? '250px' : '0' }}>
//         <a href="javascript:void(0)" className="closebtn" onClick={toggleSidebar}>&times;</a>
//         <div className="card-header" aria-expanded="false" role="tab">
//           <a href="/home" title="Inicio" className="card-title">
//             <h2 className="nav-category">Inicio</h2>
//           </a>
//         </div>
//         <div className="card-header" aria-expanded="false" role="tab">
//           <a href="/news" title="Novedades" className="card-title">
//             <h2 className="nav-category">Novedades</h2>
//           </a>
//         </div>
//         <div className="accordion accordion-flush" id="accordionHome">
//           <div className="accordion-item">
//             <h2 className="accordion-header" id="headingFb">
//               <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFb" aria-expanded="true" aria-controls="collapseFb">
//                 <h2 className="nav-category">Propulsión Fuera de Borda</h2>
//               </button>
//             </h2>
//             <div id="collapseFb" className="accordion-collapse collapse show" aria-labelledby="headingFb" data-bs-parent="#accordionHome">
//               <div className="accordion-body">
//                 <ul className="list-unstyled">
//                   <li><a href="/mercury" title="Mercury"><h3 className="nav-subcategory">Mercury</h3></a></li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//           <div className="accordion-item">
//             <h2 className="accordion-header" id="headingPi">
//               <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapsePi" aria-expanded="true" aria-controls="collapsePi">
//                 <h2 className="nav-category">Propulsión Interna</h2>
//               </button>
//             </h2>
//             <div id="collapsePi" className="accordion-collapse collapse show" aria-labelledby="headingPi" data-bs-parent="#accordionHome">
//               <div className="accordion-body">
//                 <ul className="list-unstyled">
//                   <li><a href="/vp-prop" title="Volvo Penta"><h3 className="nav-subcategory">Volvo Penta</h3></a></li>
//                   <li><a href="/mitsubishi" title="Mitsubishi"><h3 className="nav-subcategory">Mitsubishi</h3></a></li>
//                   <li><a href="https://www.kongsberg.com/" target="_blank" title="Kongsberg"><h3 className="nav-subcategory">Kongsberg</h3></a></li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//           <div className="accordion-item">
//             <h2 className="accordion-header" id="headingRuedas">
//               <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseRuedas" aria-expanded="true" aria-controls="collapseRuedas">
//                 <h2 className="nav-category">Movilidad</h2>
//               </button>
//             </h2>
//             <div id="collapseRuedas" className="accordion-collapse collapse show" aria-labelledby="headingRuedas" data-bs-parent="#accordionHome">
//               <div className="accordion-body">
//                 <ul className="list-unstyled">
//                   <li><a href="/polaris-home" title="Polaris"><h3 className="nav-subcategory">Polaris</h3></a></li>
//                   <li><a href="/clubcar" title="ClubCar"><h3 className="nav-subcategory">ClubCar</h3></a></li>
//                   <li><a href="/ecooter" title="ECOOTER">ECOOTER</a></li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//           <div className="accordion-item">
//             <h2 className="accordion-header" id="headingEmbarcaciones">
//               <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEmbarcaciones" aria-expanded="true" aria-controls="collapseEmbarcaciones">
//                 <h2 className="nav-category">Embarcaciones</h2>
//               </button>
//             </h2>
//             <div id="collapseEmbarcaciones" className="accordion-collapse collapse show" aria-labelledby="headingEmbarcaciones" data-bs-parent="#accordionHome">
//               <div className="accordion-body">
//                 <ul className="list-unstyled">
//                   <li><a href="/jeanneau" title="Jeanneau"><h3 className="nav-subcategory">Jeanneau</h3></a></li>
//                   <li><a href="/chriscraft" title="Chris Craft"><h3 className="nav-subcategory">Chris Craft</h3></a></li>
//                   <li><a href="/searay" title="Sea Ray"><h3 className="nav-subcategory">Sea Ray</h3></a></li>
//                   <li><a href="/boston" title="Boston Whaler"><h3 className="nav-subcategory">Boston Whaler</h3></a></li>
//                   <li><a href="/zodiac" title="Zodiac"><h3 className="nav-subcategory">Zodiac</h3></a></li>
//                   <li><a href="/williams" title="Williams"><h3 className="nav-subcategory">Williams</h3></a></li>
//                   <li><a href="/yacht-club" title="Yacht Club" target="_blank"><h3 className="nav-subcategory">Yacht Club</h3></a></li>
//                   <li><a href="/levefort" title="Levefort"><h3 className="nav-subcategory">Levefort</h3></a></li>
//                   <li><a href="/lowe" title="Lowe"><h3 className="nav-subcategory">Lowe</h3></a></li>
//                   <li><a href="https://zar-formenti.com.ar/" title="Zar-Formenti"><h3 className="nav-subcategory">Zar-Formenti</h3></a></li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//           <div className="accordion-item">
//             <h2 className="accordion-header" id="headingGeneracion">
//               <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseGeneracion" aria-expanded="true" aria-controls="collapseGeneracion">
//                 <h2 className="nav-category">Generación</h2>
//               </button>
//             </h2>
//             <div id="collapseGeneracion" className="accordion-collapse collapse show" aria-labelledby="headingGeneracion" data-bs-parent="#accordionHome">
//               <div className="accordion-body">
//                 <ul className="list-unstyled">
//                   <li><a href="/vp-gen" title="Volvo Penta- Motores Industriales" className="mb-4"><h3 className="nav-subcategory" style={{ lineHeight: 1.3 }}>Volvo Penta<br /><small>motores industriales</small></h3></a></li>
//                   <li><a href="/vp-ver" title="Volvo Penta- Motores versátiles" className="mb-3"><h3 className="nav-subcategory" style={{ lineHeight: 1.3 }}>Volvo Penta<br /><small>motores versátiles</small></h3></a></li>
//                   <li><a href="/generac" title="Generac"><h3 className="nav-subcategory">Generac</h3></a></li>
//                   <li><a href="/mitsugen" title="Mitsubishi"><h3 className="nav-subcategory">Mitsubishi</h3></a></li>
//                   <li><a href="/onan" title="Onan"><h3 className="nav-subcategory">Onan</h3></a></li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//           <div className="accordion-item">
//             <h2 className="accordion-header" id="headingRepuestos">
//               <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseRepuestos" aria-expanded="true" aria-controls="collapseRepuestos">
//                 <h2 className="nav-category">Repuestos y Accesorios</h2>
//               </button>
//             </h2>
//             <div id="collapseRepuestos" className="accordion-collapse collapse show" aria-labelledby="headingRepuestos" data-bs-parent="#accordionHome">
//               <div className="accordion-body">
//                 <ul className="list-unstyled">
//                   <li><a href="/repuestos-mercury" title="Mercury"><h3 className="nav-subcategory">Mercury</h3></a></li>
//                   <li><a href="/repuestos-volvopenta" title="Volvo Penta"><h3 className="nav-subcategory">Volvo Penta</h3></a></li>
//                   <li><a href="/repuestos-polaris" title="Polaris"><h3 className="nav-subcategory">Polaris</h3></a></li>
//                   <li><a href="/repuestos-clubcar" title="Club Car"><h3 className="nav-subcategory">Club Car</h3></a></li>
//                   <li><a href="/repuestos-ecooter" title="ECOOTER"><h3 className="nav-subcategory">ECOOTER</h3></a></li>
//                   <li><a href="/repuestos-chriscraft" title="Chris Craft"><h3 className="nav-subcategory">Chris Craft</h3></a></li>
//                   <li><a href="/repuestos-generac" title="Generac"><h3 className="nav-subcategory">Generac</h3></a></li>
//                   <li><a href="/repuestos-jeanneau" title="Jeanneau"><h3 className="nav-subcategory">Jeanneau</h3></a></li>
//                   <li><a href="/repuestos-searay" title="Sea Ray"><h3 className="nav-subcategory">Sea Ray</h3></a></li>
//                   <li><a href="/repuestos-boston" title="Boston Whaler"><h3 className="nav-subcategory">Boston Whaler</h3></a></li>
//                   <li><a href="/repuestos-zodiac" title="Zodiac"><h3 className="nav-subcategory">Zodiac</h3></a></li>
//                   <li><a href="/repuestos-williams" title="Williams"><h3 className="nav-subcategory">Williams</h3></a></li>
//                   <li><a href="/repuestos-levefort" title="Levefort"><h3 className="nav-subcategory">Levefort</h3></a></li>
//                   <li><a href="/repuestos-lowe" title="Lowe"><h3 className="nav-subcategory">Lowe</h3></a></li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="card-header" aria-expanded="false" role="tab">
//           <a href="/promo" title="Promociones" className="card-title">
//             <h2 className="nav-category"> Promociones</h2>
//           </a>
//         </div>
//         <div className="card-header" aria-expanded="false" role="tab">
//           <a href="/contact" title="Contacto" className="card-title">
//             <h2 className="nav-category"> Contacto</h2>
//           </a>
//         </div>
//       </div>
//       <span style={{ fontSize: '30px', cursor: 'pointer' }} onClick={toggleSidebar}>&#9776; Menú</span>
//     </div>
//   );
// };

// export default SidebarTest;



import React, { useState } from 'react';
import s from "./navTest.module.css";

const SidebarTest = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div id="mySidenav" className={s.sidenav} style={{ width: isOpen ? '250px' : '0' }}>
        <a href="javascript:void(0)" className={s.closebtn} onClick={toggleSidebar}>&times;</a>
        <div className={s.cardHeader} aria-expanded="false" role="tab">
          <a href="/home" title="Inicio" className={s.cardTitle}>
            <h2 className={s.navCategory}>Inicio</h2>
          </a>
        </div>
        <div className={s.cardHeader} aria-expanded="false" role="tab">
          <a href="/news" title="Novedades" className={s.cardTitle}>
            <h2 className={s.navCategory}>Novedades</h2>
          </a>
        </div>
        <div className={s.accordion} id="accordionHome">
          <div className={s.accordionItem}>
            <h2 className={s.accordionHeader} id="headingFb">
              <button className={s.accordionButton} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFb" aria-expanded="true" aria-controls="collapseFb">
                <h2 className={s.navCategory}>Propulsión Fuera de Borda</h2>
              </button>
            </h2>
            <div id="collapseFb" className={s.accordionCollapse} aria-labelledby="headingFb" data-bs-parent="#accordionHome">
              <div className={s.accordionBody}>
                <ul className={s.listUnstyled}>
                  <li><a href="/mercury" title="Mercury"><h3 className={s.navSubcategory}>Mercury</h3></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className={s.accordionItem}>
            <h2 className={s.accordionHeader} id="headingPi">
              <button className={s.accordionButton} type="button" data-bs-toggle="collapse" data-bs-target="#collapsePi" aria-expanded="true" aria-controls="collapsePi">
                <h2 className={s.navCategory}>Propulsión Interna</h2>
              </button>
            </h2>
            <div id="collapsePi" className={s.accordionCollapse} aria-labelledby="headingPi" data-bs-parent="#accordionHome">
              <div className={s.accordionBody}>
                <ul className={s.listUnstyled}>
                  <li><a href="/vp-prop" title="Volvo Penta"><h3 className={s.navSubcategory}>Volvo Penta</h3></a></li>
                  <li><a href="/mitsubishi" title="Mitsubishi"><h3 className={s.navSubcategory}>Mitsubishi</h3></a></li>
                  <li><a href="https://www.kongsberg.com/" target="_blank" title="Kongsberg"><h3 className={s.navSubcategory}>Kongsberg</h3></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className={s.accordionItem}>
            <h2 className={s.accordionHeader} id="headingRuedas">
              <button className={s.accordionButton} type="button" data-bs-toggle="collapse" data-bs-target="#collapseRuedas" aria-expanded="true" aria-controls="collapseRuedas">
                <h2 className={s.navCategory}>Movilidad</h2>
              </button>
            </h2>
            <div id="collapseRuedas" className={s.accordionCollapse} aria-labelledby="headingRuedas" data-bs-parent="#accordionHome">
              <div className={s.accordionBody}>
                <ul className={s.listUnstyled}>
                  <li><a href="/polaris-home" title="Polaris"><h3 className={s.navSubcategory}>Polaris</h3></a></li>
                  <li><a href="/clubcar" title="ClubCar"><h3 className={s.navSubcategory}>ClubCar</h3></a></li>
                  <li><a href="/ecooter" title="ECOOTER">ECOOTER</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className={s.accordionItem}>
            <h2 className={s.accordionHeader} id="headingEmbarcaciones">
              <button className={s.accordionButton} type="button" data-bs-toggle="collapse" data-bs-target="#collapseEmbarcaciones" aria-expanded="true" aria-controls="collapseEmbarcaciones">
                <h2 className={s.navCategory}>Embarcaciones</h2>
              </button>
            </h2>
            <div id="collapseEmbarcaciones" className={s.accordionCollapse} aria-labelledby="headingEmbarcaciones" data-bs-parent="#accordionHome">
              <div className={s.accordionBody}>
                <ul className={s.listUnstyled}>
                  <li><a href="/jeanneau" title="Jeanneau"><h3 className={s.navSubcategory}>Jeanneau</h3></a></li>
                  <li><a href="/chriscraft" title="Chris Craft"><h3 className={s.navSubcategory}>Chris Craft</h3></a></li>
                  <li><a href="/searay" title="Sea Ray"><h3 className={s.navSubcategory}>Sea Ray</h3></a></li>
                  <li><a href="/boston" title="Boston Whaler"><h3 className={s.navSubcategory}>Boston Whaler</h3></a></li>
                  <li><a href="/zodiac" title="Zodiac"><h3 className={s.navSubcategory}>Zodiac</h3></a></li>
                  <li><a href="/williams" title="Williams"><h3 className={s.navSubcategory}>Williams</h3></a></li>
                  <li><a href="/yacht-club" title="Yacht Club" target="_blank"><h3 className={s.navSubcategory}>Yacht Club</h3></a></li>
                  <li><a href="/levefort" title="Levefort"><h3 className={s.navSubcategory}>Levefort</h3></a></li>
                  <li><a href="/lowe" title="Lowe"><h3 className={s.navSubcategory}>Lowe</h3></a></li>
                  <li><a href="https://zar-formenti.com.ar/" title="Zar-Formenti"><h3 className={s.navSubcategory}>Zar-Formenti</h3></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className={s.accordionItem}>
            <h2 className={s.accordionHeader} id="headingGeneracion">
              <button className={s.accordionButton} type="button" data-bs-toggle="collapse" data-bs-target="#collapseGeneracion" aria-expanded="true" aria-controls="collapseGeneracion">
                <h2 className={s.navCategory}>Generación</h2>
              </button>
            </h2>
            <div id="collapseGeneracion" className={s.accordionCollapse} aria-labelledby="headingGeneracion" data-bs-parent="#accordionHome">
              <div className={s.accordionBody}>
                <ul className={s.listUnstyled}>
                  <li><a href="/vp-gen" title="Volvo Penta- Motores Industriales" className={s.mb4}><h3 className={s.navSubcategory} style={{ lineHeight: 1.3 }}>Volvo Penta<br /><small>motores industriales</small></h3></a></li>
                  <li><a href="/vp-ver" title="Volvo Penta- Motores versátiles" className={s.mb3}><h3 className={s.navSubcategory} style={{ lineHeight: 1.3 }}>Volvo Penta<br /><small>motores versátiles</small></h3></a></li>
                  <li><a href="/generac" title="Generac"><h3 className={s.navSubcategory}>Generac</h3></a></li>
                  <li><a href="/mitsugen" title="Mitsubishi"><h3 className={s.navSubcategory}>Mitsubishi</h3></a></li>
                  <li><a href="/onan" title="Onan"><h3 className={s.navSubcategory}>Onan</h3></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className={s.accordionItem}>
            <h2 className={s.accordionHeader} id="headingRepuestos">
              <button className={s.accordionButton} type="button" data-bs-toggle="collapse" data-bs-target="#collapseRepuestos" aria-expanded="true" aria-controls="collapseRepuestos">
                <h2 className={s.navCategory}>Repuestos y Accesorios</h2>
              </button>
            </h2>
            <div id="collapseRepuestos" className={s.accordionCollapse} aria-labelledby="headingRepuestos" data-bs-parent="#accordionHome">
              <div className={s.accordionBody}>
                <ul className={s.listUnstyled}>
                  <li><a href="/repuestos-mercury" title="Mercury"><h3 className={s.navSubcategory}>Mercury</h3></a></li>
                  <li><a href="/repuestos-volvopenta" title="Volvo Penta"><h3 className={s.navSubcategory}>Volvo Penta</h3></a></li>
                  <li><a href="/repuestos-polaris" title="Polaris"><h3 className={s.navSubcategory}>Polaris</h3></a></li>
                  <li><a href="/repuestos-clubcar" title="Club Car"><h3 className={s.navSubcategory}>Club Car</h3></a></li>
                  <li><a href="/repuestos-ecooter" title="ECOOTER"><h3 className={s.navSubcategory}>ECOOTER</h3></a></li>
                  <li><a href="/repuestos-chriscraft" title="Chris Craft"><h3 className={s.navSubcategory}>Chris Craft</h3></a></li>
                  <li><a href="/repuestos-generac" title="Generac"><h3 className={s.navSubcategory}>Generac</h3></a></li>
                  <li><a href="/repuestos-jeanneau" title="Jeanneau"><h3 className={s.navSubcategory}>Jeanneau</h3></a></li>
                  <li><a href="/repuestos-searay" title="Sea Ray"><h3 className={s.navSubcategory}>Sea Ray</h3></a></li>
                  <li><a href="/repuestos-boston" title="Boston Whaler"><h3 className={s.navSubcategory}>Boston Whaler</h3></a></li>
                  <li><a href="/repuestos-zodiac" title="Zodiac"><h3 className={s.navSubcategory}>Zodiac</h3></a></li>
                  <li><a href="/repuestos-williams" title="Williams"><h3 className={s.navSubcategory}>Williams</h3></a></li>
                  <li><a href="/repuestos-levefort" title="Levefort"><h3 className={s.navSubcategory}>Levefort</h3></a></li>
                  <li><a href="/repuestos-lowe" title="Lowe"><h3 className={s.navSubcategory}>Lowe</h3></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className={s.cardHeader} aria-expanded="false" role="tab">
          <a href="/promo" title="Promociones" className={s.cardTitle}>
            <h2 className={s.navCategory}> Promociones</h2>
          </a>
        </div>
        <div className={s.cardHeader} aria-expanded="false" role="tab">
          <a href="/contact" title="Contacto" className={s.cardTitle}>
            <h2 className={s.navCategory}> Contacto</h2>
          </a>
        </div>
      </div>
      <span style={{ fontSize: '30px', cursor: 'pointer' }} onClick={toggleSidebar}>&#9776; Menú</span>
    </div>
  );
};

export default SidebarTest;

