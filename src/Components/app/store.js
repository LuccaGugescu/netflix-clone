import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../Features/Slices/userSlice';


export default configureStore({
    reducer: {
        user: userSlice,
    }
})