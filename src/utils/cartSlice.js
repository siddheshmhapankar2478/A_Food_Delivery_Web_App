import { createSlice } from "@reduxjs/toolkit"

const cartSlice=createSlice({
    name:"cart",
    initialState:{items:[]},
    reducers:{
        addItem:(state,action)=>{
            const cartItem = state.items.find(
                (item) => item?.info?.id === action.payload?.info?.id
            );   
            if (cartItem) {
                cartItem.itemCount++;
            } 
            else {
                state.items.push({
                    ...action.payload,
                    itemCount:1,
                });
            } 

        },
        clearCart:(state)=>{
            state.items=[];
        },
        incrementItem:(state,action)=>{
            const cartItem = state.items.find(
                (item) => item?.info?.id === action.payload?.info?.id 
            );
            cartItem.itemCount++;
        },
        decrementItem:(state,action)=>{
            const cartItem = state.items.find(
                (item) => item?.info?.id === action.payload?.info?.id 
            );
            if(cartItem.itemCount>=1){
                cartItem.itemCount--;
            }
            if(cartItem.itemCount==0)
              state.items = state.items.filter((item) => item?.info?.id !== action.payload?.info?.id);

        }
    }
});
export const{addItem,clearCart,incrementItem,decrementItem}= cartSlice.actions;
export default cartSlice.reducer;