import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../features/state/slice.js";

const store = configureStore({
  reducer: {
    todosReducer,
  },
});

export default store;
