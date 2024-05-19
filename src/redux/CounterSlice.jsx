import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0
}

 export const CounterSlice = createSlice({
    initialState,
    name: "counter",
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement:(state)=>{
            state.value-= 1
        }

    }
})

export const {increment,decrement}=CounterSlice.actions;
export default CounterSlice.reducer;