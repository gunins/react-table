import {IState, actionType, valueType} from "../interfaces";
import {IFunction} from "../lib/interfaces";
import {Reducer} from "redux";
import {option} from "../lib/option";

const {assign} = Object;

const add = ({updatedValue, inputValue}: IState) => updatedValue + inputValue;
const remove = ({updatedValue, inputValue}: IState) => updatedValue - inputValue;
const change = (_: any, value: string) => +value;

const handleValue = <A, B>(key: keyof IState, accessor: IFunction<A>, _?: B) => (state: IState) => assign({}, state, {[key]: accessor(state, _)});

const setState = <A>(left: A, right: A): A => right || left;

export const counter = (initialState: IState): Reducer => (currentState: IState, {type, value}: actionType) => {
    const state = setState(initialState, currentState);
    return option()
        .or(type === 'ADD', () => handleValue('updatedValue', add)(state))
        .or(type === 'REMOVE', () => handleValue('updatedValue', remove)(state))
        .or(type === 'CHANGE', () => handleValue('inputValue', change, value)(state))
        .finally(() => state);
};

export const handler =<A> (type: string) => (value?: A) => ({type, value});

export const addHandler = handler('ADD');
export const removeHandler = handler( 'REMOVE');
export const changeHandler = handler('CHANGE');
