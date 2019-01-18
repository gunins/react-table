import React, {ReactNode} from 'react';
import './Table.css';
interface IProps {
    children: ReactNode
}

const table = ({children}: IProps) => (<table className="table"><tbody>{children}</tbody></table>);

export default table;
