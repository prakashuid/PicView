import {createSlice} from '@reduxjs/toolkit';

const state = {
    getData:[]
}

const gallerySlice = createSlice({
    name: 'gallery',
    initialState: state,
    reducers:{
        getGalleryData: (state,action)=>{
           state.getData = action.payload
        }
    }
})

export const { getGalleryData } = gallerySlice.actions;
export default gallerySlice.reducer;