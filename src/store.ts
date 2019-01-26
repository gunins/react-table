import {createStore} from "./stateControler";
import {counter} from "./counter";
import {actionType, IState} from "./interfaces";
import appModel from "./model";
import {tableModel} from "./table/TableModel";
import options from "./options";
import data from "./data";
import {IFunction} from "./lib/interfaces";

const tableStore = appModel(tableModel(options), data);

const emptyState: IState = {
    tableData: tableStore.get(),
    updatedValue: 0,
    inputValue: 5
};


const store = createStore(counter(emptyState));
export const middleware = {
    getState() {
        return store.getState()
    },
    subscribe(cb: IFunction<void>) {
        store.subscribe(() => cb(store.getState()))
    },
    dispatch<A,B>(type:actionType<A,B>) {
        return store.dispatch(type)
    }
};
export const {getState, dispatch, subscribe} = middleware;


const wait = (timeout = 1000) => new Promise(resolve => setTimeout(() => resolve(), timeout));

// Takes key and transform function, for dispatch method;
// With lenses key is not necessary.
export const handler = <A, B>(type: IFunction<A>, key: keyof IState) => (value?: B) =>  dispatch({
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
