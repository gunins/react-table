import React, {ReactNode} from 'react';

interface Iprops {
    children: ReactNode
}

const TableCell = ({children}: Iprops) => (<td>{children}</td>);

export default TableCell;
