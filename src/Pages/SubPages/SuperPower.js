import { useEffect, useState } from 'react';
import { unwrapResult } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import classNames from 'classnames/bind';

import { AnimeItemL } from '~/Components/ChildrenComponent/AnimeItem';
import { fetchAnime } from '~/redux/slices';
import styles from './SubPages.module.scss';

const cx = classNames.bind(styles);

function SuperPower() {
    const dispatch = useDispatch();
    const [val, setVal] = useState([]);

    useEffect(() => {
        dispatch(fetchAnime())
            .then(unwrapResult)
            .then((result) => setVal(result));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div>
            <div className={cx('children-content')}>
                <div className={cx('title')}>
                    <div>Super Power Anime</div>
                </div>
                <AnimeItemL content={val} />
            </div>
        </div>
    );
}

export default SuperPower;
