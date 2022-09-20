function getUiWidth(state) {
    return state.uiWidth.state;
}

export { getUiWidth };
//

function checkLogSelector(state) {
    return state.checklog.state;
}

export { checkLogSelector };
//

function animeSelector(state) {
    return state.anime.current;
}

export { animeSelector };
