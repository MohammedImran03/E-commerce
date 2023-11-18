import { configureStore } from "@reduxjs/toolkit";
import userRegestrationSlice from "./Components/Signup/UserRegister.Slice";
import loginReducer from "./Components/Login/Login.Slice";
import { userReducer } from "./Redux/reducer/user";
const store = configureStore({
	reducer: {
        registration:userRegestrationSlice,
        login:loginReducer,
        user: userReducer,
    },
});

export default store;