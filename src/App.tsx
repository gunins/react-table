import React from 'react';
import './App.css';
import AppTable from './AppTable';
import InputHandler from './inputHandler';
import appModel from './model';
import {tableModel} from './table/TableModel';
import options from './options';
import data from './data';
import {Provider} from 'react-redux';
import {createStore} from "redux";
import {IState} from './interfaces'
import {counter} from "./table/counter";


interface IProps {
}


const model = appModel(tableModel(options), data);

const emptyState: IState = {
    tableData: model.get(),
    updatedValue: 0,
    inputValue: 5
};


const store = createStore(counter(emptyState));

export class App extends React.Component<IProps> {
    state: IState;

    constructor(props: IProps) {
        super(props);
        this.state = store.getState();
        store.subscribe(() => {
            this.setState(store.getState())
        });
    }

    public render() {
        const {tableData, inputValue, updatedValue} = this.state;
        return (
            <Provider store={store}>
                <div className="App">
                    <AppTable table={tableData}/>
                    <InputHandler inputValue={inputValue}/>
                    <p>Total Value: {updatedValue}</p>
                </div>
            </Provider>
        );
    }
}

export default App;
