import React, {ReactNode, Fragment, FunctionComponent} from 'react';
import TableRow from './TableRow';
import {IRow, ICell} from './TableIntercaces';

interface Iprops {
    rows: IRow[];
    children: (cells: ICell[]) => ReactNode
}


const TableRows= ({rows, children}:Iprops) => (<Fragment>{
    rows
        .map(({cells}) => (<TableRow>
            {children(cells)}
        </TableRow>))
}</Fragment>);

export default TableRows;
