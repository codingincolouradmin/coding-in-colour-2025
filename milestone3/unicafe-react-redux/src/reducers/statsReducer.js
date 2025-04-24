import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    good: 0,
    ok: 0,
    bad: 0
}

const statsSlice = createSlice({
    name: 'stats',
    initialState,
    reducers: {
        voteGood(state,action){
            return {...state, good: state.good + 1}
        },
        voteOk(state,action) {
            return {...state, ok: state.ok + 1}
        },
        voteBad(state,action) {
            return {...state, bad: state.bad + 1}
        },
        reset(state,action) {
            return initialState
        }


    }
})
console.log(statsSlice.reducer);

export const {voteGood, voteOk, voteBad, reset} = statsSlice.actions
export default statsSlice.reducer