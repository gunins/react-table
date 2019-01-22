import {ITable} from "./table/TableIntercaces";
import {IFunction} from "./lib/interfaces";

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
    key?: keyof IState
    type: IFunction<number>
    value?: string
}
