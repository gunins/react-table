import React from "react";
import {IFunction} from "./lib/interfaces";

interface Iprops {
    add: IFunction<void>
    remove: IFunction<void>
    change: IFunction<void>
    inputValue: number

}

export const InputHandler = ({add, remove, change, inputValue}: Iprops) => (<div>
    <input type="number" value={inputValue}
           onChange={({currentTarget}: React.FormEvent<HTMLInputElement>) => change(currentTarget)}/>
    <button onClick={() => add()}>Add value</button>
    <button onClick={() => remove()}>Remove value</button>
</div>);
