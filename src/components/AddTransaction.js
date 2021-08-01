import React, {useState, useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';

export const AddTransaction = () => {
    const {addTransaction} = useContext(GlobalContext);
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount
        } 

        addTransaction(newTransaction);
    }

    return (
        <div id="add-transaction">
            <h3>
                Add new transaction
            </h3>
            <form onSubmit={ onSubmit}>
                <div className="form-control">
                    <input type="text" value={text} 
                    onChange={(e)=> setText(e.target.value)}
                     placeholder="Add title..." />
                </div>

                <div className="form-control">
                    <label htmlFor="amount">
                        Amount <br/>
                        (negative - expense, positive - income)
                    </label>
                    <input type="text" value={amount}
                    onChange={(e)=> setAmount(e.target.value)}
                     placeholder="Amount" id="amount" />
                </div>
                <button className="btn">
                    Add transaction
                </button>
            </form>
        </div>
    )
}
