import { configureStore } from '@reduxjs/toolkit';
import cartSystem from '~/components/Cart/cartSystem';

const store = configureStore({
    reducer: {
        cart: cartSystem.reducer,
    },
});

export default store;
