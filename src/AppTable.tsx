import React from 'react';
import Table from './table/Table'
import TableRow from './table/TableRow'
import TableRows from './table/TableRows'
import TableCells from './table/TableCells'

import TableHeaders from './table/TableHeaders'
import {ITable} from "./table/TableIntercaces";

interface Iprops {
    table: ITable
}

export default ({table: {header, rows}}: Iprops) => (
    <Table>
        <TableRow>
            <TableHeaders headers={header}/>
        </TableRow>
        <TableRows rows={rows}>{
            (cells) =>
                <TableCells cells={cells}/>
        }</TableRows>
    </Table>);
