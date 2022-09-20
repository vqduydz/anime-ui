import { useEffect, useState } from 'react';
import { unwrapResult } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import classNames from 'classnames/bind';

import { AnimeItemS } from '~/Components/ChildrenComponent/AnimeItem';
import { fetchAnime } from '~/redux/slices';
import styles from './Home.module.scss';
import Button from '~/Components/ChildrenComponent/Button';
import routesConfig from '~/config/routes';
import Banner from '~/Components/ChildrenComponent/Banner';

const cx = classNames.bind(styles);

function Home() {
    const dispatch = useDispatch();
    /// Begin popular
    const [popular, setPopular] = useState([]);

    useEffect(() => {
        dispatch(fetchAnime())
            .then(unwrapResult)
            .then((result) => setPopular(result));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    /// End popular

    /// Begin TopAiring
    const [topAiring, setTopAiring] = useState([]);

    useEffect(() => {
        dispatch(fetchAnime())
            .then(unwrapResult)
            .then((result) => setTopAiring(result));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    // /// End TopAiring

    /// Begin movies
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        dispatch(fetchAnime())
            .then(unwrapResult)
            .then((result) => setMovies(result));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    // /// End setMovies
    return (
        <div className={cx('container')}>
            <div className={cx('banner')}>
                <Banner />
            </div>

            <div className={cx('content')}>
                <div className={cx('inner')}>
                    <div>
                        <div className={cx('children-content')}>
                            <div className={cx('title')}>
                                <div>Top Airing</div>
                                <Button to={routesConfig.top_airing} className={cx('see-more')} text>
                                    see more
                                </Button>
                            </div>
                            <AnimeItemS content={topAiring} />
                        </div>
                        <div className={cx('children-content')}>
                            <div className={cx('title')}>
                                <div>Popular</div>
                                <Button to={routesConfig.popular} className={cx('see-more')} text>
                                    see more
                                </Button>
                            </div>
                            <AnimeItemS content={popular} />
                        </div>
                        <div className={cx('children-content')}>
                            <div className={cx('title')}>
                                <div>Movies</div>
                                <Button to={routesConfig.movies} className={cx('see-more')} text>
                                    see more
                                </Button>
                            </div>
                            <AnimeItemS content={movies} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
