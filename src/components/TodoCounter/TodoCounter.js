import React from "react";
import './TodoCounter.css';

function TodoCounter ( props) {
    const { total, completed }  = props;
    return (
        <h2 className="TodoCounter">Has Completado { completed } de { total } ejercicios</h2>
    );
}

export { TodoCounter } ;