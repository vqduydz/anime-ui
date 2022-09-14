import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

///         checklog -------------------------

export const checkLog = createAsyncThunk('changeLog/checkLog', async (params, thunkAPI) => {
    thunkAPI.dispatch(changeLogSlice.actions.changeLog);
    console.log(params);
    return params;
});

export const changeLogSlice = createSlice({
    name: 'checklog',
    initialState: {
        state: true,
        caption: '',
        loading: false,
        error: '',
    },
    reducers: {
        changeLog: (state, action) => {
            state.state = action.payload.state;
            state.caption = action.payload.caption;
        },
    },
    extraReducers: {
        [checkLog.pending]: (state) => {
            state.loading = true;
        },
        [checkLog.rejected]: (state, action) => {
            state.loading = false;
            state.error = '';
            state.current = action.error;
        },
        [checkLog.fulfilled]: (state, action) => {
            state.loading = false;
            state.current = action.payload;
            //payload == return of fetchAnime()
        },
    },
});

const { reducer: checklogReducer } = changeLogSlice;
export { checklogReducer };

///         Anime -------------------------

export const fetchAnime = createAsyncThunk('anime/fetchAnime', async () => {
    const res = await fetch('https://gogoanime.herokuapp.com/top-airing');
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
