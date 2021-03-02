import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import chartIMG from '../../../img/pie-chart.svg';
import tableIMG from '../../../img/table.svg';
import './Widget.css';

const Widget = ({type, name, i, onRemoveItem}) => {
  
  return(
    <div className="widget">
      <div className="header">
        <p>{name}</p>
        <span 
          className="header-remove"
          onClick={() => onRemoveItem(i)}
        >
          <FontAwesomeIcon icon={faTimes} />
        </span>
      </div>
      <div className="main">
        {type==='График' && <img src={chartIMG} alt="chartImg"/>}
        {type==='Таблица' && <img src={tableIMG} alt="tableImg"/>}
      </div>
    </div>
  )
};

export default Widget;