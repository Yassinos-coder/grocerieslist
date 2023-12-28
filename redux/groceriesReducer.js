import { createSlice } from "@reduxjs/toolkit";

const GroceriesHandler = createSlice({
    name: 'GroceriesHandler',
    initialState: {
        shoppingList: []
    },
    reducers: {
        AddItem: (state, action) => {
            state.shoppingList = [...state.shoppingList, action.payload];
        },
        ClearShoppingList :(state, action) => {
            state.shoppingList = []
        }
    }
});

export default GroceriesHandler.reducer;

export const { AddItem, ClearShoppingList } = GroceriesHandler.actions;
