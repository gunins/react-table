import React from 'react';
import './App.css';
import AppTable from './AppTable';
import {InputHandler} from "./inputHandler";
import appModel from './model';
import {ITable} from './table/TableIntercaces';
import {tableModel} from './table/TableModel';
import options from './options';
import data from './data';


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


const add = ({updatedValue, inputValue}: IState) => updatedValue + inputValue;
const remove = ({updatedValue, inputValue}: IState) => updatedValue - inputValue;
const change = (_: any, value: string) => +value;


const handleValue = <A, B>(key: keyof IState, accessor: Ifn<A>, _?: B) => (state: IState) => ({[key]: accessor(state, _)});

export class App extends React.Component<IProps> {
    state: IState;

    constructor(props: IProps) {
        super(props);
        const model = appModel(tableModel(options), data);
        const tableData = model.get();
        this.state = {
            tableData,
            updatedValue: 0,
            inputValue: 5
        };
        // model.update((table: ITable) => this.setState({table}));
    }

    addHandler() {
        this.setState(handleValue('updatedValue', add))
    }

    removeHandler() {
        this.setState(handleValue('updatedValue', remove))

    }

    changeHandler(value: string) {
        this.setState(handleValue('inputValue', change, value))
    }

    public render() {
        const {tableData, inputValue, updatedValue} = this.state;
        return (
            <div className="App">
                <AppTable table={tableData}/>
                <InputHandler
                    inputValue={inputValue}
                    add={() => this.addHandler()}
                    remove={() => this.removeHandler()}
                    change={({value}: valueType) => this.changeHandler(value)}
                />
                <p>Total Value: {updatedValue}</p>
            </div>
        );
    }
}

export default App;
