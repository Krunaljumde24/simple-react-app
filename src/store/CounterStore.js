import { configureStore } from "@reduxjs/toolkit";

import CounterReducer from "./CounterReducer.js";

const counterStore = configureStore({ reducer: CounterReducer });

export default counterStore;
