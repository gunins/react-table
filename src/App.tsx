import React from 'react';
import './App.css';
import AppTable from './AppTable';
import {InputHandler} from "./inputHandler";
import appModel from './model';
import {ITable} from './table/TableIntercaces';
import {tableModel} from './table/TableModel';
import options from './options';
import data from './data';

import {lensPath, set, view} from "./lib/lenses";


import {Ifn} from "./lib/interfaces";

interface IProps {
    table: ITable
}


type valueType = { value: string }

interface IState {
    tableData: ITable,
    updatedValue: number,
    inputValue: number
}

const updatedValueLens = lensPath<IState, number>('updatedValue');
const inputValueLens = lensPath<IState, number>('inputValue');

const add = (state: IState) => view(updatedValueLens)(state) + view(inputValueLens)(state);
const remove = (state: IState) => view(updatedValueLens)(state) - view(inputValueLens)(state);
const change = (_: any, {value}: valueType) => +value;

export class App extends React.Component<IProps> {
    state: IState;

    constructor(props: IProps) {
        super(props);
        const model = appModel(tableModel(options), data);
        const tableData = model.get();
        this.state = {
            tableData,
            updatedValue:0,
            inputValue:5
        };
        // model.update((table: ITable) => this.setState({table}));
    }

    private handleValue<A>(cb: Ifn<number>, lens: lensPath<IState, number>) {
        return (_?: A) => this.setState((state: IState) => set(lens, cb(state, _))(state));
    }

    public render() {
        const {tableData, inputValue, updatedValue} = this.state;
        return (
            <div className="App">
                <AppTable table={tableData}/>
                <InputHandler
                    inputValue={inputValue}
                    add={this.handleValue(add, updatedValueLens)}
                    remove={this.handleValue(remove, updatedValueLens)}
                    change={this.handleValue(change, inputValueLens)}
                />
                <p>Total Value: {updatedValue}</p>
            </div>
        );
    }
}

export default App;
