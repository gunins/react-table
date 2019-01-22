import {IState, actionType} from "./interfaces";
import {IFunction} from "./lib/interfaces";
import {Reducer} from "redux";
import {compose} from "./lib/compose";

const {assign} = Object;


const handleValue = <A, B>({type, value, key}: actionType) => (state: IState) => key ? assign({}, state, {[key]: type(state, value)}) : state;

const setState = <A>(left: A, right: A): A => right || left;

export const counter = (initialState: IState): Reducer => (currentState: IState, _: actionType) =>
    compose(handleValue(_), setState)(initialState, currentState);

export const handler = <A, B>(type: IFunction<A>, key: keyof IState) => (value?: B) => ({
    type,
    key,
    value
});

const add = ({updatedValue, inputValue}: IState) => updatedValue + inputValue;
const remove = ({updatedValue, inputValue}: IState) => updatedValue - inputValue;
const change = (_: any, value: string) => +value;

export const addHandler = handler(add, 'updatedValue');
export const removeHandler = handler(remove, 'updatedValue');
export const changeHandler = handler(change, 'inputValue');
