import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from './reducers/CounterReducer'

export default function Counter() {

    const dispatch = useDispatch();
    const count = useSelector(state => state.counter.value);

    return (
        <div>
            <h4>Counter : {count}</h4>
            <button
                className='btn btn-sm btn-primary'
                onClick={(event) => dispatch(increment())}
            >
                Increment
            </button>

            <button
                className='btn btn-sm btn-danger'
                onClick={(event) => dispatch(decrement())}
            >
                Decrement
            </button>

            <button
                className='btn btn-sm btn-warning'
                onClick={(event) => dispatch(reset())}
            >
                Reset
            </button>
        </div>
    )
}


