import { configureStore } from '@reduxjs/toolkit';
import { animeReducer, checklogReducer } from './slices';

const rootReducer = {
    checklog: checklogReducer,
    anime: animeReducer,
};

const store = configureStore({
    reducer: rootReducer,
});

export default store;
