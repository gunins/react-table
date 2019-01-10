import React from 'react';
import Table from './table/Table'
import TableRow from './table/TableRow'
import TableCell from './table/TableCell'
import TableHeader from './table/TableHeder'
import {ITable} from "./interfaces";

interface Iprops {
    table:ITable
}

export default ({table}:Iprops)=>{
    console.log(table);
    return (<Table>
        <TableRow>
            <TableHeader>Header One</TableHeader>
            <TableHeader>Header Two</TableHeader>
        </TableRow>
        <TableRow>
            <TableCell>Cell One</TableCell>
            <TableCell>Cell Two</TableCell>
        </TableRow>
        <TableRow>
            <TableCell>Cell One</TableCell>
            <TableCell>Cell Two</TableCell>
        </TableRow>
        <TableRow>
            <TableCell>Cell One</TableCell>
            <TableCell>Cell Two</TableCell>
        </TableRow>
    </Table>)
}
