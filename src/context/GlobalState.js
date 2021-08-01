import React, { createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

const initialState = {
    transactions:[
        
    ]
}

// Context

export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children })=>{
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions
    function deleteTransaction(id){
        dispatch({
            type:'DELETE_TRANSACTION',
            payload: id
        });
    }
    function addTransaction(text){
        dispatch({
            type:'ADD_TRANSACTION',
            payload: text
        });
    }
    return (<GlobalContext.Provider value={{ 
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
        }}>
        { children }
    </GlobalContext.Provider>)
}