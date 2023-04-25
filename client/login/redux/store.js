import { configureStore } from "@reduxjs/toolkit";
import { authReducer, activateReducer , pwReducer, followReducer, getUsers, getAUser, updateUser} from "./reducers";

import {messageReducer, conversationListReducer} from './messageReducers.js'

const store= configureStore({
    reducer:{
        auth:authReducer,
        activate:activateReducer,
        pw:pwReducer,
        follow:followReducer,
        users:getUsers,
        user:getAUser,
        // updateUser:updateUser
        message:messageReducer,
        conversationList:conversationListReducer


        
    }
})

export default store;