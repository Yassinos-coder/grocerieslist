import { configureStore } from '@reduxjs/toolkit'
import GroceriesHandler from './groceriesReducer'

const Store = configureStore({
    reducer:{
        GroceriesHandler : GroceriesHandler
    }
})

export default Store