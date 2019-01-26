import {IFunction} from "./lib/interfaces";
import {compose} from "./lib/compose";

export type Reducer<A, B> = (
    state: A,
    action: B
) => A

const _state = Symbol('_state');
const _handlers = Symbol('_handlers');
const _update = Symbol('_update');
const _action = Symbol('_action');

class Store<A, B> {
    [_state]: A;
    [_handlers]: IFunction<void>[];
    [_action]: IFunction<A>;

    constructor(action: Reducer<A, B>, initialState?: A) {
        this[_action] = action;
        this[_handlers] = [];
        this[_state] = initialState || this.dispatch();
    }

    [_update]() {
        this[_handlers].forEach(handler => handler(this[_state]));
    }

    getState() {
        return this[_state];
    }

    setState(state: A) {
        this[_state] = state;
        this[_update]();
        return this[_state];
    }

    subscribe(handler: IFunction<void>) {
        this[_handlers] = [...this[_handlers], handler];
        const remove = () => {
            this[_handlers] = this[_handlers].filter(_ => _ !== handler);
        };
        return {
            remove
        }

    }

    dispatch(actionType?: B) {
        return compose(
            (_) => this.setState(_),
            (state, actionType) => this[_action](state, actionType)
        )(this[_state], actionType);

    }
}

export const createStore = <A, B>(action: Reducer<A, B>, initialState?: A) => new Store(action, initialState);
