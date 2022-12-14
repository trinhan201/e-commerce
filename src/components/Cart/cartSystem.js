import { createSlice } from '@reduxjs/toolkit';

const cartSystem = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            const product = action.payload;
            const index = state.findIndex((x) => x.id === product.id);
            if (index >= 0) {
                state[index].quantity += 1;
            } else {
                product.quantity = 1;
                state.push({ ...product });
            }
        },
        incrementByAmount: (state, action) => {
            const { product, quantity } = action.payload;

            const index = state.findIndex((x) => x.id === product.id);
            if (index >= 0) {
                state[index].quantity += quantity;
            } else {
                state.push({ ...product, quantity });
                product.quantity = quantity;
            }
        },
        decrementAnItem: (state, action) => {
            const product = action.payload;
            const index = state.findIndex((x) => x.id === product.id);
            state[index].quantity -= 1;
        },
        updateQuantity: (state, action) => {
            const { product, quantity } = action.payload;
            const index = state.findIndex((x) => x.id === product.id);
            state[index].quantity = quantity;
        },
        removeItem: (state, action) => {
            const removeId = action.payload;
            return state.filter((x) => x.id !== removeId);
        },
    },
});
const { actions, reducer } = cartSystem;
export const { addToCart, decrementAnItem, incrementByAmount, updateQuantity, removeItem } = actions;
export default cartSystem;
