import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './Taskslice'


export const store= configureStore(
  {
    reducer:{
     tasks:taskReducer
    },
  })
 