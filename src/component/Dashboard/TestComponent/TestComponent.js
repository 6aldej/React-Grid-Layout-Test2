import React from "react";
import chartIMG from '../../../img/pie-chart.svg';
import tableIMG from '../../../img/table.svg';
import './style.css';

const TestComponent = ({number, style, main}) => {
    return (
      <div className="box" style={style}>
        <h1>{number}</h1>
        {main==='график' && <img src={chartIMG} alt="chartImg"/>}
        {main==='таблица' && <img src={tableIMG} alt="tableImg"/>}
        <button><b>CLICK</b></button>
      </div>
    );
};

export default TestComponent;