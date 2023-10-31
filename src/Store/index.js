import {configureStore} from '@reduxjs/toolkit';
import galeryReducer from '../Slice/galerySlice'

const store = configureStore({
    reducer:{
        galleryData: galeryReducer
    } 
})

export default store;

