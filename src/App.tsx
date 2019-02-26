import React from 'react';
import styles from './App.module.scss';
import AppTable from './AppTable';
import {IState} from './interfaces'
import {subscribe, getState} from "./store";

interface IProps {
}


export class App extends React.Component<IProps> {
    state: IState;

    constructor(props: IProps) {
        super(props);
        this.state = getState();
        subscribe((state) => {
            console.log('state Updated');
            this.setState(state)
        });
    }

    public render() {
        const {tableData} = this.state;
        return (
            <div className={styles.App}>
                <AppTable table={tableData}/>
                {/*In app can be many Providers, apply provider in any scope where you need. Usually is in App context*/}
            </div>
        );
    }
}

export default App;
