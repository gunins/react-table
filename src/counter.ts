import {IState, actionType} from "./interfaces";
import {IFunction} from "./lib/interfaces";
import {Reducer} from "redux";
import {compose} from "./lib/compose";

const {assign} = Object;

//Helper taking transform function and key to be applied to state;
const handleValue = <A, B>({type, value, key}: actionType) => (state: IState) => key ? assign({}, state, {[key]: type(state, value)}) : state;
// add initial state for first time
const setState = <A>(left: A, right: A): A => right || left;
// counter store returning Redux.Reducer
export const counter = (initialState: IState): Reducer => (currentState: IState, _: actionType) =>
    compose(handleValue(_), setState)(initialState, currentState);

// Takes key and transform function, for dispatch method;
// With lenses key is not necessary.
export const handler = <A, B>(type: IFunction<A>, key: keyof IState) => (value?: B) => ({
    type,
    key,
    value
});
// Just simple transform methods, takind state and returning value.
// with lenses should return state.
const add = ({updatedValue, inputValue}: IState) => updatedValue + inputValue;
const remove = ({updatedValue, inputValue}: IState) => updatedValue - inputValue;
const change = (_: any, value: string) => +value;

// export handlers for dispatch method.
export const addHandler = handler(add, 'updatedValue');
export const removeHandler = handler(remove, 'updatedValue');
export const changeHandler = handler(change, 'inputValue');
