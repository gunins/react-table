import React, {ReactNode} from 'react';

interface Iprops {
    children: ReactNode
}

const row = ({children}: Iprops) => (<tr>{children}</tr>);

export default row;
