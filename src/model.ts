import {IFunction} from "./lib/interfaces";

type GetSet = {
    get: any
    set: any
};


const model = <A extends GetSet, B, C>(model: A, data?: B) => {
    let handlers: IFunction<void>[] = [];
    const updateHandlers = (data: C) => handlers.forEach(_ => _(data));
    return {
        get() {
            const response = model.get(data);
            updateHandlers(response);
            return response;
        },
        set() {
        },
        update(handler: IFunction<C>) {
            handlers = [...handlers, handler];
            return {
                remove() {
                    handlers = handlers.filter(_ => _ !== handler);
                }
            }

        },
        clear() {
            handlers = [];
        }
    }
};


export default model

