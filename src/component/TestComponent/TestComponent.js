import React from "react";
import boxIMG from '../../img/box.svg';
import './style.css';

const TestComponent = ({number, style}) => {
    return (
      <div className="box" style={style}>
        <h1>{number}</h1>
        <img src={boxIMG}/>
        <button><b>CLICK</b></button>
      </div>
    );
};

export default TestComponent;