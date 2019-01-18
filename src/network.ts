import {view, set, nullLens} from './lib/lenses';
import options from './options';
import data from './data';
import {ITable, IOptions, IRow, ICell, IHeader, Tcombined, IData} from "./interfaces";
import {Ifn} from "./lib/interfaces";


interface Icb {
    (arg: ITable): void;
}

const getHeader = (options: IOptions[]): IHeader[] => options.map(({id, visible, title}) => ({id, visible, title}));
const getCell = <A>(data: A, options: IOptions[],): ICell[] => options.map(({id, visible, accessor}) => {
    const title: Tcombined = view(accessor)(data) as string;
    return ({id, visible, title})
});

const getRows = <A>(options: IOptions[], data: A[]): IRow[] => data.map((item: A, index: number) => ({
    cells: getCell<A>(item, options),
    index
}));


const getTable = <A>(options: IOptions[], data: A[]) => {
    const header = getHeader(options);
    const rows = getRows<A>(options, data);
    return ({
        header,
        rows
    });
};
const getOption = (fieldId: string, options: IOptions[]): IOptions | undefined => options.find(({id}) => fieldId === id);
const getField = <A extends Object>({cells}: IRow, options: IOptions[]) => cells.reduce((acc, {title, id}) => {
    const option = getOption(id, options);
    return option ? set(option.accessor, title)(acc) : acc;
}, {});

const getData = <A>(options: IOptions[], {rows}: ITable) => rows.map((row) => getField<A>(row, options));

class TableStructure<A> {
    options: IOptions[];

    constructor(options: IOptions[]) {
        this.options = options;
    }

    get(data: A[]) {
        return getTable<A>(this.options, data);
    }

    set(data: ITable) {
        return getData<A>(this.options, data);
    }
}

const tableStructure = <A>(options: IOptions[]) => new TableStructure<A>(options);


const model = <A>(options: IOptions[], data: A[]) => {
    const table = tableStructure<A>(options);
    let handlers: Ifn<void>[] = [];
    const updateHandlers = (data: ITable) => handlers.forEach(_ => _(data));
    return {
        get() {
            const response = table.get(data);
            updateHandlers(response);
            return response;
        },
        set() {

        },
        update(handler: Icb) {
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

export default model<IData>(options, data)

