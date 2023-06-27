import {configureStore} from '@reduxjs/toolkit'
import useReducer  from './UserSlice';

const Store = configureStore({
    reducer :{
        user :useReducer
       
    }
})
export default Store;
