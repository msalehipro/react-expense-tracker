import React from 'react';
import './App.scss';
import {Header} from './components/Header';
import {Balance} from './components/Balance';
import {IncomeExpenses} from './components/IncomeExpenses';
import {TransactionList} from './components/TransactionList';
import {AddTransaction} from './components/AddTransaction';
import {GlobalProvider} from './context/GlobalState';

class App extends React.Component {

    render() {
        return (
        <GlobalProvider>
            <Header/>
            <div className="container">
                <Balance/>
                <IncomeExpenses/>
                <TransactionList/>
                <AddTransaction />
            </div>
            <div className="container" style={{marginTop:"50px"}}>
                Author: Mohammad Salehi
            </div>
        </GlobalProvider>
        );

    }
}

export default App;
