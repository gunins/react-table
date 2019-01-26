import React from "react";
import {addHandler, removeHandler, changeHandler} from "./store";


interface IProps{
    inputValue: number
}

const InputHandler = ({inputValue}: IProps) => {
    return (<div>
        <input type="number" value={inputValue}
               onChange={({currentTarget}) => changeHandler(currentTarget.value)}/>
        <button onClick={() => addHandler()}>Add value</button>
        <button onClick={() => removeHandler()}>Remove value</button>
    </div>);
}

export default InputHandler
