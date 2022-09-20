import classNames from 'classnames/bind';
import { useSelector } from 'react-redux';
import { getUiWidth } from '~/redux/selector';
import Button from '../Button';

import styles from './Banner.module.scss';

const cx = classNames.bind(styles);

function Banner() {
    const uiWidth = useSelector(getUiWidth);
    return (
        <div className="banner-container">
            <div className="banner-content">
                <div className={cx('inner')}>
                    <Button href="/" className={cx('banner-btn')}>
                        <img
                            className={cx('banner-img')}
                            src="https://www.dailynews.co.th/wp-content/uploads/2022/08/%E0%B8%94%E0%B8%B9%E0%B8%AB%E0%B8%99%E0%B8%B1%E0%B8%87%E0%B8%81%E0%B8%B1%E0%B8%9A%E0%B8%AB%E0%B8%A1%E0%B8%B5-%E0%B8%9B%E0%B8%81-3-768x433.jpg"
                            alt="red"
                        />

                        <div className={cx('dYRgdt')}>
                            <div className={cx('left')}></div>

                            <div className={cx('center')}></div>

                            <div className={cx('right')}></div>
                        </div>
                        <div className={cx('overlay')}></div>
                    </Button>
                    <div className={cx('box-info')}>
                        <h2 className={cx('box-title')}>One Piece Movie 15 : Red</h2>
                        <hr />
                        {uiWidth > 700 && (
                            <span className={cx('box-desc')}>
                                Một cuộc phiêu lưu mới bắt đầu !!! Băng Mũ Rơm đến tham dự lễ hội âm nhạc trên một hòn
                                đảo nọ và một nữ idol bí ẩn xuất hiện ? Cô ấy tên là Uta và thân phận thực sự chính là
                                con gái của...
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
