import classNames from 'classnames/bind';

import Header from '~/Components/Header';
import Footer from '~/Components/Footer';
import Content from '~/Components/Content';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <Header />
            </div>
            <div className={cx('main-content')}>
                <Content>{children}</Content>
            </div>
            <div className={cx('footer')}>
                <Footer />
            </div>
        </div>
    );
}

export default DefaultLayout;
