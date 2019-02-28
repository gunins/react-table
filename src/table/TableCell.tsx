import React, {ReactNode} from 'react';

interface Iprops {
    children: ReactNode,
    id: string;
    globalID: string;
    rowID:string;

}

const TableCell = ({children, id, globalID, rowID}: Iprops) => (<td data-id={id} data-row-id={rowID} data-global-id={globalID}>{children}</td>);

export default TableCell;
