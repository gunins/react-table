import React from 'react';
import './App.css';
import AppTable from './AppTable';
import InputHandler from './inputHandler';
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
        const {tableData, inputValue, updatedValue} = this.state;
        return (
            <div className="App">
                <AppTable table={tableData}/>
                {/*In app can be many Providers, apply provider in any scope where you need. Usually is in App context*/}
                <InputHandler inputValue={inputValue}/>
                <p>Total Value: {updatedValue}</p>
            </div>
        );
    }
}

export default App;
