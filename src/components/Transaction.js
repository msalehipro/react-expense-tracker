import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const Transaction = ({transaction}) => {
    const sign = transaction.amount < 0 ? '-' : '+';
    const {deleteTransaction } = useContext(GlobalContext);
    return (
        <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
            <div>
                <span>{transaction.text}</span>
                <span>{sign}${Math.abs(transaction.amount)}</span>
            </div>
            <button className="delete-btn"
            onClick={()=> deleteTransaction(transaction.id) }
            >X</button>
        </li>
    )
}
