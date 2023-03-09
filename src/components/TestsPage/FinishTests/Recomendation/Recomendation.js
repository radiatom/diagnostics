import React from 'react';
import s from "./Recomendation.module.css"
import { NavLink } from 'react-router-dom';


const Recomendation = (props) => {
      return (
            <div className={s.recomendation}>
                  <p>Усувайте проблеми по одній або комплексно, щоб вияснити, що було причиною. Рекомендовано усунути всі проблеми відразу. Після оновлення сторінки результати діагностики зникнуть(збережіть цю інформацію).</p>
                  <NavLink to="/Diagnostics"><button className="btn btn-warning">Почати нову діагностику</button></NavLink>
            </div>
      );
}

export default Recomendation;
