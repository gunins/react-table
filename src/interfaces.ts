import {lensPath} from "./lib/lenses";

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

export interface IData {
    _id?: string
    isActive?: boolean
    company?: string
    email?: string,
    name?: {
        first: string
        last: string
    }

}

export type Tcombined = string | boolean | number

export interface IOptions {
    id: string,
    visible: boolean,
    index: number,
    title: string,
    accessor: lensPath<IData, Tcombined>
}


