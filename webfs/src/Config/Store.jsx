import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./Userslice";
import { serviceReducer } from "./Serviceslice";



export const store = configureStore({
    reducer:{
        user : userReducer,
        service : serviceReducer,
    }
})