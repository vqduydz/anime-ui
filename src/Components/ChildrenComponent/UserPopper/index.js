import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { useContext } from 'react';

// import { StoreContext } from '~/Store';
import Button from '../Button';
import styles from './UserPopper.module.scss';
import {
    faBookmark,
    faChevronCircleRight,
    faCircleUser,
    faGears,
    faRightFromBracket,
    faUser,
} from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function UserPopper() {
    // const state = useContext(StoreContext);
    // console.log(state);

    const handleLoguot = () => {};

    return (
        <div className={cx('wrapper')}>
            <div className={cx('user-popper-user')}>
                <FontAwesomeIcon className={cx('user-avartar')} icon={faCircleUser} />
                <span className={cx('user-name')}> User Name</span>
            </div>
            <div className={cx('user-popper-actions')}>
                <Button
                    text
                    className={cx('user-popper-btn')}
                    leftIcon={<FontAwesomeIcon icon={faUser} />}
                    rightIcon={<FontAwesomeIcon icon={faChevronCircleRight} />}
                >
                    Your Profile
                </Button>
                <Button
                    text
                    className={cx('user-popper-btn')}
                    leftIcon={<FontAwesomeIcon icon={faBookmark} />}
                    rightIcon={<FontAwesomeIcon icon={faChevronCircleRight} />}
                >
                    Your Library
                </Button>
                <Button
                    text
                    className={cx('user-popper-btn')}
                    leftIcon={<FontAwesomeIcon icon={faGears} />}
                    rightIcon={<FontAwesomeIcon icon={faChevronCircleRight} />}
                >
                    Settings
                </Button>
                <Button
                    text
                    className={cx('user-popper-btn')}
                    leftIcon={<FontAwesomeIcon icon={faRightFromBracket} />}
                    rightIcon={<FontAwesomeIcon icon={faChevronCircleRight} />}
                    onClick={handleLoguot}
                >
                    Log out
                </Button>
            </div>
        </div>
    );
}

export default UserPopper;
