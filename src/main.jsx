import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux';
import { configureStore } from "@reduxjs/toolkit";

import CounterReducer from './reducers/CounterReducer.js';
import TodoReducer from './reducers/TodoReducer.js'

const store = configureStore({
  reducer: {
    counter: CounterReducer,
    todo: TodoReducer
  }
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode >,
)
