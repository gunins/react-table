import React, {ReactNode} from 'react';

interface Iprops {
    children: ReactNode,
}


const header = ({children}: Iprops) => (<th>{children}</th>);

export default header;
