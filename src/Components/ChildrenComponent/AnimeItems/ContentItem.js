import classNames from 'classnames/bind';

import styles from './AnimeItems.module.scss';

const cx = classNames.bind(styles);

function ContentItem({ data, className }) {
    return (
        <div className={cx('item')}>
            <div className={cx('item-container')}>
                <div className={cx('image-container')}>
                    <div className={cx('image')}>
                        <img className={cx('thubm')} src={data.animeImg} alt={data.animeTitle} />
                    </div>
                    <div className={cx('play')}></div>
                </div>
                <div className={cx('info')}>
                    <div className={cx('title')}>
                        <p>{data.animeTitle}</p>
                    </div>
                    <p className={cx('desc')}>releasedDate : {data.releasedDate}</p>
                </div>
            </div>
        </div>
    );
}

export default ContentItem;
