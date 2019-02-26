import React from "react";
import TableMap, {TableMapType} from "./TableMap";
import TableHeader from './TableHeader';
import {IHeader} from "./TableIntercaces";

const TableHeaderMap = TableMap as TableMapType<IHeader>;

interface Iprops {
    headers: IHeader[];
}

const TableHeaders = ({headers}: Iprops) => (
    <TableHeaderMap data={headers}>{
        ({title, id}) =>
            <TableHeader key={id}>{title}</TableHeader>
    }</TableHeaderMap>);

export default TableHeaders;
