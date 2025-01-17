import { configureStore } from '@reduxjs/toolkit'
import libraryReducer from './librarySlice';

const appStore = configureStore(    // AppStore Created here
    {
        reducer: {
            library: libraryReducer,    // Appending the libraryReducer into the appStore Reducer
        }
    }
)

export default appStore;