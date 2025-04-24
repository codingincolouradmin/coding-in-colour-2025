import { createSlice } from "@reduxjs/toolkit";

const phoneBookSlice = createSlice({
    name: 'phonebook',
    initialState: [{}, {}, {}],
    reducers: {
        setAllPersons(state, action) {
            return action.payload
        },
        updatePerson(state, action) {
            return state.map(person => person.id === action.payload.id ? action.payload : person)
        },
        addPerson(state, action) {
            return state.concat(action.payload)
        },
        deletePerson(state, action) {
            return state.filter(p => p.id !== action.payload.id)
        }

    }
})

export const { setAllPersons, updatePerson, addPerson, deletePerson } = phoneBookSlice.actions;
export default phoneBookSlice;