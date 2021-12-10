import React from "react";
import './CreateTodoButton.css';

function CreateTodoButton () {
    return (
        <button className="CreateTodoButton"
        onClick={() => console.log('Create Todo Button Clicked')}
        >+
        </button>
    );
}

export {CreateTodoButton};