import {lensPath} from "../lib/lenses";

export enum order {
    ASC,
    DESC
}

export enum tableType {
    Cell,
    Row,
    ID
}

export interface IHeader {
    title: string;
    id: string;
    active?: boolean;
    order?: order;
    sort?: boolean;
}

export interface ICell {
    title: string,
    id: string,
    globalID: string;
    rowID: string;
    active?: boolean;
    sort?: boolean;

}

export interface IRow {
    id:string;
    cells: ICell[];
    index: number;
    active?: boolean;
    attributes: { [key: string]: string }
}

export interface ITable {
    header: IHeader[],
    rows: IRow[]
}


export type Tcombined = string | boolean | number


export interface ITableOptionsCell<A> {
    type: tableType;
    id: string;
    title: string;
    visible: boolean;
    accessor: lensPath<A, Tcombined>;
    active?: boolean;
    order?: order;
    sort?: boolean;
}


export interface ITableOptionsRow<A> {
    type: tableType;
    visible: boolean;
    id: string;
    index: number;
    attribute: string;
    accessor: lensPath<A, Tcombined>;
}

export interface ITableOptionsID<A> {
    type: tableType;
    id: string;
    accessor: lensPath<A, Tcombined>;
}

export type ITableOptions<A> = ITableOptionsID<A> | ITableOptionsCell<A> | ITableOptionsRow<A>
