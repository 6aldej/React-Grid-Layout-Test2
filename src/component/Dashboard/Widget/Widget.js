import React from "react";
import chartIMG from '../../../img/pie-chart.svg';
import tableIMG from '../../../img/table.svg';
import './Widget.css';

const Widget = ({type, name}) => {
  
  return(
    <div className="widget">
      <div className="header">
        <p><b>{name}</b></p>
      </div>
      <div className="main">
        {type==='График' && <img src={chartIMG} alt="chartImg"/>}
        {type==='Таблица' && <img src={tableIMG} alt="tableImg"/>}
      </div>
    </div>
  )
};

export default Widget;