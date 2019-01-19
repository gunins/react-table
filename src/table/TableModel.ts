import {ITable, IRow, ICell, IHeader, ITableOptions, Tcombined} from './TableIntercaces';
import {set, view} from '../lib/lenses';


const getHeader =<A> (options: ITableOptions<A>[]): IHeader[] => options.map(({id, visible, title}) => ({id, visible, title}));
const getCell = <A>(data: A, options: ITableOptions<A>[],): ICell[] => options.map(({id, visible, accessor}) => {
    const title: Tcombined = view(accessor)(data) as string;
    return ({id, visible, title})
});

const getRows = <A>(options: ITableOptions<A>[], data: A[]): IRow[] => data.map((item: A, index: number) => ({
    cells: getCell<A>(item, options),
    index
}));


const getTable = <A>(options: ITableOptions<A>[], data: A[]) => {
    const header = getHeader<A>(options);
    const rows = getRows<A>(options, data);
    return ({
        header,
        rows
    });
};
const getOption =<A> (fieldId: string, options: ITableOptions<A>[]): ITableOptions<A> | undefined => options.find(({id}) => fieldId === id);

type ObjectLiteral = { [key: string]: any };

const getField = <A  extends ObjectLiteral>({cells}: IRow, options: ITableOptions<A>[]) => cells.reduce((acc, {title, id}) => {
    const option = getOption<A>(id, options);
    return option ? set(option.accessor, title)(acc) : acc;
}, {} as A);

const getData = <A>(options: ITableOptions<A>[], {rows}: ITable) => rows.map((row) => getField<A>(row, options));

export class TableModel<A> {
    options: ITableOptions<A>[];

    constructor(options: ITableOptions<A>[]) {
        this.options = options;
    }

    get(data: A[]) {
        return getTable<A>(this.options, data);
    }

    set(data: ITable) {
        return getData<A>(this.options, data);
    }
}


export const tableModel = <A>(options: ITableOptions<A>[]) => new TableModel<A>(options);
