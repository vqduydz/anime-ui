import classNames from 'classnames/bind';

import styles from './Search.module.scss';

const cx = classNames.bind(styles);

function SearchItems({ data }) {
    return (
        <div className={cx('search-item')}>
            <img className={cx('anime-img')} src={data.animeImg} alt={data.animeTitle} />
            <h4 className={cx('anime-title')}>{data.animeTitle}</h4>
        </div>
    );
}

export default SearchItems;
