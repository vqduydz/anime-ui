import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../Button';
import styles from './UserPopper.module.scss';

import { useDispatch } from 'react-redux';

import { changeLogSlice } from '~/redux/slices';

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
    const dispatch = useDispatch();
    const handleLoguot = () => {
        dispatch(
            changeLogSlice.actions.changeLog({
                state: false,
            }),
        );
    };

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
