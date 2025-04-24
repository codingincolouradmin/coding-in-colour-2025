import { configureStore } from "@reduxjs/toolkit";
import statsReducer from './reducers/statsReducer'

const store = configureStore({
    reducer: {
        stats: statsReducer

    }
})

export default store