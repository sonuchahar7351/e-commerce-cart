import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

  export const STATUS=Object.freeze({
    IDLE:'idle',
    ERROR:'error',
    LOADING:'loading'
 })



  const productSlice=createSlice({
    name:'product',
    initialState:{
        data:[],
        status:STATUS.IDLE,
    },
    reducers:{
        setProducts(state,action){

           state.data=action.payload;
        }
        ,
        setStatus(state,action){
          state.status=action.payload
        }
    }
})

export const{setProducts, setStatus}=productSlice.actions;
export default productSlice.reducer;

export function fatchProducts(){
    return async function fatchProductThunk(dispatch,get){

      dispatch(setStatus(STATUS.LOADING))
        try{

            const res = await fetch("https://fakestoreapi.com/products");
            const data = await res.json();
            dispatch(setProducts(data))
            dispatch(setStatus(STATUS.IDLE))
        }
        catch(err){
           console.log(err)
           dispatch(setStatus(STATUS.ERROR))
        }
    }
}