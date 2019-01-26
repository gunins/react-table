import {IState, actionType} from "./interfaces";
import {Reducer} from "./stateControler";
import {compose} from "./lib/compose";
import {option} from "./lib/option";

const {assign} = Object;
const wait = (timeout = 1000) => new Promise(resolve => setTimeout(() => resolve(), timeout));

//Helper taking transform function and key to be applied to state;
const assignValue = <A, B>({type, value, key}: actionType<A, B>, state: IState) => assign({}, state, {[key]: type(state, value)});

const handleValue = <A, B>(_?: actionType<A, B>) => (state: IState) => _ !== undefined ? assignValue(_, state) : state;

// add initial state for first time
const setState = <A>(left: A, right: A): A => right || left;
// counter store returning Redux.Reducer
export const counter = <A, B>(initialState: IState): Reducer<IState, actionType<A, B>> =>
    (currentState: IState, _?: actionType<A, B>) => compose(handleValue(_), setState)(initialState, currentState);

