import React from 'react';
import Table from './table/Table'
import TableRow from './table/TableRow'
import TableRows from './table/TableRows'
import TableCells from './table/TableCells'
import TableCell from './table/TableCell'
import TableHeader from './table/TableHeader'
import {ITable} from "./table/TableIntercaces";

interface Iprops {
    table: ITable
}


export default ({table}: Iprops) => {
    const {header, rows} = table;

    return (<Table>
        <TableRow>
            <TableCells cells={header}>{
                ({title}) =>
                    <TableHeader>{title}</TableHeader>
            }</TableCells>
        </TableRow>
        <TableRows rows={rows}>{
            (cells) => (
                <TableCells cells={cells}>
                    {({title}) => <TableCell>{title}</TableCell>}
                </TableCells>
            )
        }</TableRows>

    </Table>)
}
