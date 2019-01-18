import React from 'react';
import './App.css';
import AppTable from './AppTable';
import appModel from './network';
import {ITable} from "./interfaces";

interface IProps {
}

const table: ITable = {
    header: [],
    rows: []
};

class App extends React.Component {
    state: { table: ITable };

    constructor(props: IProps) {
        super(props);
        const table = appModel.get();
        this.state = {table};
        // appModel.update((table: ITable) => this.setState({table}));
    }


    render() {
        const {table} = this.state;
        return (
            <div className="App">
                <AppTable table={table}/>
            </div>
        );
    }
}

export default App;
