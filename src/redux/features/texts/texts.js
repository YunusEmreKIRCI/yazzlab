import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    texts : []
}
export const textsSlice = createSlice({
    name : 'texts',
    initialState,
    reducers: {
        addText: (state, action) =>{
            const {id, text} = action.payload;
            state.texts.push({id, text});
        },
        
    },

    
});
export const { addText } = textsSlice.actions
export default textsSlice.reducer