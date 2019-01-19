import {lensPath} from "../lib/lenses";

export interface IHeader {
    title: string,
    visible: boolean,
    id: string
}

export interface ICell {
    title: string,
    id: string,
    visible: boolean

}

export interface IRow {
    cells: ICell[],
    index: number
}

export interface ITable {
    header: IHeader[],
    rows: IRow[]
}


export type Tcombined = string | boolean | number

export interface ITableOptions<A> {
    id: string,
    visible: boolean,
    index: number,
    title: string,
    accessor: lensPath<A, Tcombined>
}
