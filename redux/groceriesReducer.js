import { createSlice } from "@reduxjs/toolkit";


const GroceriesHandler = createSlice({
    name: 'GroceriesHandler',
    initialState:{
        list: []
    },
    reducers:{
        AddItem: (state, action) => {
            state.list = [...state.list, action.payload]
        }
    }
})


export default GroceriesHandler.reducer

export const {AddItem} = GroceriesHandler.actions