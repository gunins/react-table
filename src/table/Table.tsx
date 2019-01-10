import React, {ReactNode} from 'react';
import './Table.css';
interface Iprops {
    children: ReactNode
}

const table = ({children}: Iprops) => (<table className="table"><tbody>{children}</tbody></table>);

export default table;
