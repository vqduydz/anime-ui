import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

/// ui=width

export const getUiWidth = createAsyncThunk('uiWidth/getUiWidth', async (params, thunkAPI) => {
    thunkAPI.dispatch(changeLogSlice.actions.changeLog);
    console.log(params);
    return params;
});

export const uiWidthSlice = createSlice({
    name: 'uiWidth',
    initialState: {
        state: window.innerWidth,
    },
    reducers: {
        getUiWidth: (state, action) => {
            state.state = action.payload.state;
        },
    },
});

const { reducer: getUiWidthReducer } = uiWidthSlice;
export { getUiWidthReducer };

///         checklog -------------------------

export const checkLog = createAsyncThunk('changeLog/checkLog', async (params, thunkAPI) => {
    thunkAPI.dispatch(changeLogSlice.actions.changeLog);
    console.log(params);
    return params;
});

export const changeLogSlice = createSlice({
    name: 'checklog',
    initialState: {
        state: false,
    },
    reducers: {
        changeLog: (state, action) => {
            state.state = action.payload.state;
            state.caption = action.payload.caption;
        },
    },
});

const { reducer: checklogReducer } = changeLogSlice;
export { checklogReducer };

///         Anime -------------------------

export const fetchAnime = createAsyncThunk('anime/fetchAnime', async () => {
    const res = await fetch('https://gogoanime.herokuapp.com/top-airing?page=2');
    const data = await res.json();
    const result = await data;
    return result;
});

export const animeSlice = createSlice({
    name: 'anime',
    initialState: {
        current: {},
        loading: false,
        error: '',
    },
    reducers: {},
    extraReducers: {
        [fetchAnime.pending]: (state) => {
            state.loading = true;
        },
        [fetchAnime.rejected]: (state, action) => {
            state.loading = false;
            state.error = '';
            state.current = action.error;
        },
        [fetchAnime.fulfilled]: (state, action) => {
            state.loading = false;
            state.current = action.payload;
            //payload == return of fetchAnime()
        },
    },
});
const { reducer: animeReducer } = animeSlice;
export { animeReducer };
