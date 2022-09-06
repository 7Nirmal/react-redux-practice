import {createSlice} from "@reduxjs/toolkit";


const cartslice = createSlice({
    name:"cart",
    initialState:{
        itemslist:[],
        totalquantity:0,
        showcart:false,
    },
    reducers:{
        addtocart(state,action){
            const newitem =action.payload;
            const existingitem = state.itemslist.find(item => item.id === newitem.id);
            if(existingitem){
                 existingitem.quantity++;
                 existingitem.totalprice += newitem.price;
                 state.totalquantity++;
 
            }
            else{
                state.itemslist.push({
                    id:newitem.id,
                    price:newitem.price,
                    quantity:1,
                    totalprice: newitem.price,
                    name: newitem.name
                })
                state.totalquantity++;
            }
        },
        removefromcart(state,action){
            const id = action.payload;
            const existingitem = state.itemslist.find(item => item.id ===id);
            if(existingitem.quantity===1){
                state.itemslist = state.itemslist.filter(item => item.id !== id);
                state.totalquantity--;
            }
            else{
                existingitem.quantity--;
                existingitem.totalprice -= existingitem.price;
                state.totalquantity--;
            }

        },
        setshowcart(state){
            state.showcart = (!state.showcart);
        }
    }
})

export const cartactions = cartslice.actions;

export default cartslice;