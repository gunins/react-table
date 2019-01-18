import React from 'react';
import Table from './table/Table'
import TableRow from './table/TableRow'
import TableCell from './table/TableCell'
import TableHeader from './table/TableHeder'
import {ITable, IHeader, IRow, ICell} from "./interfaces";

interface Iprops {
    table: ITable
}


const headerTemplate = (header: IHeader[]) => header
    .filter(({visible}) => visible)
    .map(({title, id}) => <TableHeader key={id} >{title}</TableHeader>);

const cellTemplate = (cells: ICell[]) => cells
    .filter(({visible}) => visible)
    .map(({title, id}) => <TableCell key={id} >{title}</TableCell>);


export default ({table}: Iprops) => {
    const {header, rows} = table;

    return (<Table>
        <TableRow>
            {headerTemplate(header)}
        </TableRow>
        {rows.map(({cells, index}) => (
            <TableRow key={index} >{cellTemplate(cells)}</TableRow>
        ))}

    </Table>)
}
