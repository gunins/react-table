import {
    ITable,
    IRow,
    ICell,
    IHeader,
    ITableOptions,
    ITableOptionsRow,
    ITableOptionsCell,
    ITableOptionsID,
    Tcombined,
    tableType,
    order
} from './TableIntercaces';
import {set, view} from '../lib/lenses';

interface Ioptions<A> {
    rowOptions: ITableOptionsRow<A>[];
    cellOptions: ITableOptionsCell<A>[];
    idOptions: ITableOptionsID<A>[];
}



const setGlobalID = (row: string, id: string) => `${row}_${id}`;

const getHeader = <A>(options: ITableOptionsCell<A>[]): IHeader[] => options
    .map(({id, title}) => ({
        id,
        title
    }));

const getCell = <A>(data: A, options: ITableOptionsCell<A>[], rowID: string): ICell[] => options
    .map(({id, accessor}) => {
        const title: Tcombined = view(accessor)(data) as string;
        const globalID = setGlobalID(rowID, id);
        return ({id, title, globalID, rowID})
    });

const getRowID = <A>({accessor}: ITableOptionsID<A>, data: A) => view(accessor)(data) as string;
const getRowData = <A>(options: ITableOptionsRow<A>[], data: A, id: string) => options
    .reduce((acc, {accessor, attribute}) => ({
        [attribute]: view(accessor)(data) as string,
        ...acc
    }), {'data-id': id});

const getRows = <A>({idOptions: [idOption], cellOptions, rowOptions}: Ioptions<A>, data: A[]): IRow[] => {
    return data.map((item: A, index: number) => {
        const id = getRowID<A>(idOption, item);
        const attributes = getRowData<A>(rowOptions, item, id);
        return ({
            cells: getCell<A>(item, cellOptions, id),
            index,
            id,
            attributes
        })
    });
}


const getTable = <A>(options: Ioptions<A>, data: A[]) => {
    const {cellOptions} = options;
    const header = getHeader<A>(cellOptions);
    const rows = getRows<A>(options, data);
    return ({
        header,
        rows
    });
};
const getOption = <A>(fieldId: string, options: ITableOptions<A>[]): ITableOptions<A> | undefined => options.find(({id}) => fieldId === id);

type ObjectLiteral = { [key: string]: any };

const getField = <A extends ObjectLiteral>({cells}: IRow, options: ITableOptions<A>[]) => cells
    .reduce((acc, {title, id}) => {
        const option = getOption<A>(id, options);
        return option ? set(option.accessor, title)(acc) : acc;
    }, {} as A);

const getData = <A>(options: ITableOptions<A>[], {rows}: ITable) => rows
    .map((row) => getField<A>(row, options));


const getTableOptions = <A>(optionType: tableType, options: ITableOptions<A>[]) => options
    .filter(({type}) => type === optionType);

const getIDOptions = <A>(options: ITableOptions<A>[]) => getTableOptions(tableType.ID, options) as ITableOptionsID<A>[];
const getRowOptions = <A>(options: ITableOptions<A>[]) => getTableOptions(tableType.Row, options) as ITableOptionsRow<A>[];
const getCellOptions = <A>(options: ITableOptions<A>[]) => getTableOptions(tableType.Cell, options) as ITableOptionsCell<A>[];

const setOptions = <A>(options: ITableOptions<A>[]): Ioptions<A> => ({
    rowOptions: getRowOptions<A>(options),
    cellOptions: getCellOptions<A>(options),
    idOptions: getIDOptions<A>(options)
});

export class TableModel<A> {
    options: Ioptions<A>;
    rawOptions: ITableOptions<A>[];

    constructor(rawOptions: ITableOptions<A>[]) {
        this.rawOptions = rawOptions;
        this.options = setOptions(rawOptions);
    }

    get(data: A[]) {
        return getTable<A>(this.options, data);
    }

    set(data: ITable) {
        return getData<A>(this.rawOptions, data);
    }
}


export const tableModel = <A>(options: ITableOptions<A>[]) => new TableModel<A>(options);
