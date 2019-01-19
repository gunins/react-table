import React from "react";
import {Ifn} from "./lib/interfaces";

interface Iprops {
    add: Ifn<void>
    remove: Ifn<void>
    change: Ifn<void>
    inputValue: number

}

export const InputHandler = ({add, remove, change, inputValue}: Iprops) => (<div>
    <input type="number" value={inputValue}
           onChange={({currentTarget}: React.FormEvent<HTMLInputElement>) => change(currentTarget)}/>
    <button onClick={() => add()}>Add value</button>
    <button onClick={() => remove()}>Remove value</button>
</div>);
