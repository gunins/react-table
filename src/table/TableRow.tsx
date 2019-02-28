import React, {ReactNode} from 'react';

interface Iprops {
    children: ReactNode,
    attributes?: { [key: string]: string }
}

const row = ({children, attributes}: Iprops) => (<tr {...attributes}>{children}</tr>);

export default row;
