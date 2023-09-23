import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    tabFilterKey: "all",
    searchKey: ""
}

const filtersSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        tabSelected: (state, action) => {
            state.tabFilterKey = action.payload
        },
        searched: (state, action) => {
            state.searchKey = action.payload
        }
    },
});

export const { tabSelected, searched } = filtersSlice.actions
export default filtersSlice.reducer