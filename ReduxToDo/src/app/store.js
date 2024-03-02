import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../features/todo/todoSlice'; 

//configuring store and making it aware reducers 
export const store = configureStore({
  reducer: todoReducer
  });
