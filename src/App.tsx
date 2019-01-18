import React from 'react';
import './App.css';
import AppTable from './AppTable';
import appModel from './network';
import {ITable} from "./interfaces";

interface IProps {
    table: ITable
}

/*const table: ITable = {
    header: [],
    rows: []
};*/

export class App extends React.Component<IProps> {
    state: {
        table: ITable,
        updatedValue: number,
        inputValue: number
    };

    constructor(props: IProps) {
        super(props);
        const table = appModel.get();
        const updatedValue: number = 0;
        const inputValue: number = 5;

        this.handleAddValue = this.handleAddValue.bind(this);
        this.handleRemoveValue = this.handleRemoveValue.bind(this);

        this.state = {
            table,
            updatedValue,
            inputValue
        };
        // appModel.update((table: ITable) => this.setState({table}));
    }

    private handleAddValue() {
        const addedValue = this.state.updatedValue + this.state.inputValue;
        this.setState({
            updatedValue: addedValue
        })
    }

    private handleRemoveValue() {
        const addedValue = this.state.updatedValue - this.state.inputValue;
        this.setState({
            updatedValue: addedValue
        })
    }

    private handleChangeEvent(event: React.FormEvent<HTMLInputElement>) {
        this.setState({
            inputValue: parseInt(event.currentTarget.value)
        })
    }

    public render() {
        const {table} = this.state;

        return (
            <div className="App">
                <AppTable table={table}/>
                <input type="number" value={this.state.inputValue} onChange={(e) => this.handleChangeEvent(e)}/>
                <div>
                    <button onClick={this.handleAddValue}>Add value</button>
                    <button onClick={this.handleRemoveValue}>Remove value</button>
                </div>
                <p>Total Value: {this.state.updatedValue}</p>
            </div>
        );
    }
}

export default App;
