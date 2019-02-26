import React, {Fragment, ReactNode, FunctionComponent} from 'react';
import {IHeader, ICell, IRow} from "./TableIntercaces";

interface Iprops<A> {
    cells: A[];
    children: (cell: A) => ReactNode
}

export type TableCellsType<A = IHeader | ICell> = FunctionComponent<Iprops<A>>


const TableCells: TableCellsType = ({children, cells}) => (<Fragment>{
    cells
        .filter(({visible}) => visible)
        .map((cell) => children(cell))
}</Fragment>);

export default TableCells;
