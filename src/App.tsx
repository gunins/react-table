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
import {counter} from "./counter";


interface IProps {
}


const model = appModel(tableModel(options), data);

const emptyState: IState = {
    tableData: model.get(),
    updatedValue: 0,
    inputValue: 5
};


const counterStore = createStore(counter(emptyState));

export class App extends React.Component<IProps> {
    state: IState;

    constructor(props: IProps) {
        super(props);
        this.state = counterStore.getState();
        counterStore.subscribe(() => {
            this.setState(counterStore.getState())
        });
    }

    public render() {
        const {tableData, inputValue, updatedValue} = this.state;
        return (
            <div className="App">
                <AppTable table={tableData}/>
                {/*In app can be many Providers, apply provider in any scope where you need. Usually is in App context*/}
                <Provider store={counterStore}>
                    <InputHandler inputValue={inputValue}/>
                </Provider>
                <p>Total Value: {updatedValue}</p>
            </div>
        );
    }
}

export default App;
