import { configureStore } from "@reduxjs/toolkit";
import { authReducer, activateReducer , pwReducer, followReducer, getUsers, getAUser, updateUser} from "./reducers";
const store= configureStore({
    reducer:{
        auth:authReducer,
        activate:activateReducer,
        pw:pwReducer,
        follow:followReducer,
        users:getUsers,
        user:getAUser,
        // updateUser:updateUser


        
    }
})

export default store;