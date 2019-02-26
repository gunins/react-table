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



// Takes key and transform function, for dispatch method;
// With lenses key is not necessary.
export const handler = <A, B>(type: IFunction<A>, key: keyof IState) => (value?: B) =>  dispatch({
        type,
        key,
        value
    });


