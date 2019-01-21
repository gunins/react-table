import {ITable} from "./table/TableIntercaces";

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

export interface IState {
    tableData: ITable,
    updatedValue: number,
    inputValue: number
}

export type valueType = { value: string }

export type actionType = {
    type: string
    value?: string
}
