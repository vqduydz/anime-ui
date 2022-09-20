import { configureStore } from '@reduxjs/toolkit';
import { animeReducer, checklogReducer, getUiWidthReducer } from './slices';

const rootReducer = {
    checklog: checklogReducer,
    anime: animeReducer,
    uiWidth: getUiWidthReducer,
};

const store = configureStore({
    reducer: rootReducer,
});

export default store;
