import {createSlice} from "@reduxjs/toolkit";

const authslice = createSlice({
    name:"auth",
    initialState:{isloggedin:false,token:null,email:""},
    reducers:{
        login(state,action){
            state.isloggedin = true;
            state.token = action.payload.token;
            state.email = action.payload.email;
        },
        logout(state){
            state.isloggedin = false;
        }
    }
})

export const authactions = authslice.actions;

export default authslice;