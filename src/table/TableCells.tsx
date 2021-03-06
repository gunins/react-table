import React from "react";
import TableMap, {TableMapType} from "./TableMap";
import TableCell from './TableCell';
import {ICell} from "./TableIntercaces";

const TableBodyMap = TableMap as TableMapType<ICell>;

interface Iprops {
    cells: ICell[];
}

const TableCells = ({cells}: Iprops) => (
    <TableBodyMap data={cells}>{
        ({title,  ..._}) =>
            <TableCell key={_.id} {..._}>{title}</TableCell>
    }</TableBodyMap>);

export default TableCells;
