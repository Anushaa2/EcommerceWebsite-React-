import React, { useReducer } from 'react'
import Memo from './Memo'

//define the inital state
const initialState = {
    count: 1
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + 1
            }

        case 'DECREMENT':
            return {
                count: state.count - 1
            }
        default:
            return state
    }
}

const DataCounter = () => {
    //useReducer returns the current state and a dispatch function
    //useReducer-function
    //state->initialstate ,dispatch->reducer
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <>
            <h2>{state.count}</h2>
            <button className='btn bnt-primary' on onClick={() => dispatch({ type: 'INCREMENT' })}>Increment </button>
            <button className='btn bnt-primary' on onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement </button>
            <Memo />


        </>
    )
}

export default DataCounter