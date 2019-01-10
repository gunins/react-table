import React, {ReactNode} from 'react';

interface Iprops {
    children: ReactNode
}

const cell = ({children}: Iprops) => (<td>{children}</td>);

export default cell;
