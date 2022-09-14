function checkLogSelector(state) {
    return state.checklog.caption;
}

export { checkLogSelector };

function animeSelector(state) {
    if (state === undefined) {
        return;
    } else {
        console.log(state);
        // return state.checkAnime.animeList;
    }
}

export { animeSelector };
