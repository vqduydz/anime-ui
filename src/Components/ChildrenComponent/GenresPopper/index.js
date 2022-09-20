import classNames from 'classnames/bind';
import Button from '../Button';
import styles from './GenresPopper.module.scss';
import routes from '~/config/routes';

const cx = classNames.bind(styles);

function GenresPopper() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('genre-popper-actions')}>
                <Button to={routes.action} text className={cx('genre-popper-btn')}>
                    Action
                </Button>
                <Button to={routes.comedy} text className={cx('genre-popper-btn')}>
                    Comedy
                </Button>
                <Button to={routes.martial_arts} text className={cx('genre-popper-btn')}>
                    Martial Arts
                </Button>
                <Button to={routes.shounen} text className={cx('genre-popper-btn')}>
                    Shounen
                </Button>
                <Button to={routes.super_power} text className={cx('genre-popper-btn')}>
                    Super Power
                </Button>
            </div>
        </div>
    );
}

export default GenresPopper;
