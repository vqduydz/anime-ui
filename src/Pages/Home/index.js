import classNames from 'classnames/bind';
import ChildComponent from '~/Components/ChildrenComponent/AnimeItems';

import styles from './Home.module.scss';
import { useEffect, useState } from 'react';
import { unwrapResult } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import { fetchAnime } from '~/redux/slices';

const cx = classNames.bind(styles);

function Home() {
    const dispatch = useDispatch();
    /// Begin popular
    const [val, setVal] = useState([]);

    useEffect(() => {
        dispatch(fetchAnime())
            .then(unwrapResult)
            .then((result) => setVal(result));
    }, []);
    /// End popular
    return (
        <div>
            <div className={cx('children-content')}>
                <div className={cx('title')}>Popular Anime</div>
                <ChildComponent content={val} />
            </div>
        </div>
    );
}

export default Home;
