import React from "react";
import {DispatchProp, connect} from "react-redux";
import {addHandler, removeHandler, changeHandler} from "./table/counter";


interface IProps extends DispatchProp {
    inputValue: number
}

const InputHandler = ({dispatch, inputValue}: IProps) => (<div>
    <input type="number" value={inputValue}
           onChange={({currentTarget}: React.FormEvent<HTMLInputElement>) => dispatch(changeHandler(currentTarget.value))}/>
    <button onClick={() => dispatch(addHandler())}>Add value</button>
    <button onClick={() => dispatch(removeHandler())}>Remove value</button>
</div>);

export default connect()(InputHandler)
