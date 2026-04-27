import { createSlice } from "@reduxjs/toolkit";

const initialState = {

}

const nombreSlice = createSlice({
    name: 'nombreSlice',
    initialState,
    reducers: {

    }

})

// export const {
//  reducers   
// } = nombreSlice.actions

// export const selectExperience = state => state.experiences
// export const selectEditingItem = state => state.editingItem

// esto exporta el slice bajo el nombre expresado en name:'nombreSlice'
export default nombreSlice.reducer
