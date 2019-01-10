import React from 'react';
import './App.css';
import AppTable from './AppTable';
import {model} from './network';
import {ITable} from "./interfaces";

interface Iprops {
}

const table: ITable = {
    header: [],
    rows: []
};

class App extends React.Component {
    state: { table: ITable };

    constructor(props: Iprops) {
        super(props);
        this.state = {table};

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
