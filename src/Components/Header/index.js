import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { faCircleDown, faCircleUser } from '@fortawesome/free-regular-svg-icons';

import { Wrapper as PopperWrapper } from '~/Popper/';
import routesConfig from '~/config/routes';
import Button from '../ChildrenComponent/Button';
import Search from '../ChildrenComponent/Search/Search';
import { LogoIcon, VipBox } from '../ChildrenComponent/Icon';
import styles from './Header.module.scss';
import UserPopper from '../ChildrenComponent/UserPopper';
import { checkLogSelector } from '~/redux/selector';

const cx = classNames.bind(styles);

function Header() {
    const logStatus = useSelector(checkLogSelector);

    const [log, setLog] = useState(false);

    const handleLogin = () => {
        setLog(true);
        console.log(log);
    };
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Button href={routesConfig.home} className={cx('logo-btn')}>
                    <div className={cx('logo')}>
                        <LogoIcon />
                    </div>
                </Button>
                {/* <div className={cx('nav')}></div> */}
                <Search />
                <div className={cx('actions')}>
                    <div className={cx('actions-container')}>
                        <div className={cx('actions-content')}>
                            <Button
                                outline
                                className={cx('app-box')}
                                leftIcon={<FontAwesomeIcon icon={faCircleDown} />}
                            >
                                APP
                            </Button>
                            <Button className={cx('vip-box')}>
                                <VipBox />
                            </Button>

                            <div className={cx('log')}>
                                {!logStatus && (
                                    <div className={cx('no-user')}>
                                        <Button text className={cx('signup-btn')} to={routesConfig.login}>
                                            Sign Up
                                        </Button>
                                        <Button primary className={cx('login-btn')} onClick={handleLogin}>
                                            Log in
                                        </Button>
                                    </div>
                                )}

                                {logStatus && (
                                    <Tippy
                                        visible
                                        interactive
                                        placement="bottom-end"
                                        render={(attrs) => (
                                            <div className={cx('user-popper')} tabIndex="-1" {...attrs}>
                                                <PopperWrapper className={cx('user-popper-container')}>
                                                    <UserPopper log={log} />
                                                </PopperWrapper>
                                            </div>
                                        )}
                                    >
                                        <div className={cx('has-user')}>
                                            <Button className={cx('login')}>
                                                <FontAwesomeIcon className={cx('user-avartar')} icon={faCircleUser} />
                                            </Button>
                                        </div>
                                    </Tippy>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
