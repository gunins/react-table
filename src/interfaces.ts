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
    tableData: ITable;
}

export type valueType = { value: string }

export type actionType<A, B> = {
    key: keyof IState
    type: IFunction<A>
    value?: B
}
