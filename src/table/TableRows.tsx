import React, {ReactNode} from "react";
import TableMap, {TableMapType} from "./TableMap";
import TableRow from './TableRow';
import {IRow, ICell} from "./TableIntercaces";

const TableRowMap = TableMap as TableMapType<IRow>;

interface Iprops {
    rows: IRow[];
    children: (cells: ICell[]) => ReactNode;
}

const TableRows = ({rows, children}: Iprops) => (
    <TableRowMap data={rows}>{
        (_) => {
            const {cells, index, attributes} =_;
            return (
                <TableRow attributes={attributes}  key={index}>
                    {children(cells)}
                </TableRow>)
        }
    }</TableRowMap>);

export default TableRows;
