import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart:[],
    totalQnty:0,
    totalPrice:0
}

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers :{
        
        addToCart : (state, action) => {
            const item = state.cart.find((item) => item.id === action.payload.id);
            if(item) {
                item.quantity++;
                item.totalPrice += action.payload.price
            }else {
                state.cart.push({
                    id:action.payload.id,
                    title:action.payload.title,
                    price:action.payload.price,
                    quantity:1,
                    totalPrice:action.payload.price,
                    image:action.payload.image,
                    description:action.payload.description
                })
            }
            state.totalQnty += 1;
            state.totalPrice += action.payload.price
        },

        increaseQnty : (state, action) => {
            const item = state.cart.find((itm) => itm.id === action.payload);

            console.log("Increase Qnty", item);

            if(item) {
                item.quantity ++;
                item.totalPrice += item.price;

                state.totalQnty++;
                state.totalPrice += item.price;
            }
        },

        decreaseQnty: (state, action) => {
            const itemIndex = state.cart.findIndex((itm) => itm.id === action.payload);
        
            if (itemIndex !== -1) {
                const item = state.cart[itemIndex];
        
                if (item.quantity > 1) {
                    
                    item.quantity--;
                    item.totalPrice -= item.price;
        
                    
                    state.totalQnty--;
                    state.totalPrice -= item.price;
                } else {
                    
                    state.cart.splice(itemIndex, 1);
        
                    state.totalQnty--;
                    state.totalPrice -= parseInt(item.price);
                }
            }
        },
    }
});

export const {addToCart, increaseQnty, decreaseQnty} = cartSlice.actions;

export default cartSlice.reducer;