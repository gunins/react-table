import React, {Fragment, ReactNode, FunctionComponent} from 'react';
import {IHeader, ICell, IRow} from "./TableIntercaces";

interface Iprops<A> {
    data: A[];
    children: (cell: A) => ReactNode;
}

type tableType = IHeader | ICell | IRow;
export type TableMapType<A = tableType> = FunctionComponent<Iprops<A>>


const TableMap: TableMapType = ({children, data}) => (<Fragment>{
    data.map((cell) => children(cell))
}</Fragment>);

export default TableMap;
