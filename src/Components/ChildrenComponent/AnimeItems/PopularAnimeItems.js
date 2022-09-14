function PopularAnimeItems(data) {
    const animeResult = data.data;
    return (
        <div>
            <img src={animeResult.animeImg} alt={animeResult.animeTitle} />
            <h2>animeTitle : {animeResult.animeTitle}</h2>
            <h2>releasedDate : {animeResult.releasedDate}</h2>
        </div>
    );
}

export default PopularAnimeItems;
