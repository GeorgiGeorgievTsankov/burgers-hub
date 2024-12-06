import { configureStore } from "@reduxjs/toolkit";
import userReducer from './Features/user/userSlice';
import menuReducer from './Features/menu/menuSlice'
// import cartReducer from './Features/cart/cartSlice';

const store = configureStore({
    reducer: {
        user: userReducer,
        menu: menuReducer,
        // cart: cartReducer,
    }
})


export default store;


