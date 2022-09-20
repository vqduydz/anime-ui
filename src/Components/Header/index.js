import { useEffect } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import { useSelector, useDispatch } from 'react-redux';
import { faCircleDown, faCircleUser } from '@fortawesome/free-regular-svg-icons';

import { Wrapper as PopperWrapper } from '~/Popper/';
import routesConfig from '~/config/routes';
import Button from '../ChildrenComponent/Button';
import Search from '../ChildrenComponent/Search/Search';
import { LogoIcon, VipBox } from '../ChildrenComponent/Icon';
import styles from './Header.module.scss';
import UserPopper from '../ChildrenComponent/UserPopper';
import GenresPopper from '../ChildrenComponent/GenresPopper';
import { checkLogSelector, getUiWidth } from '~/redux/selector';
import { changeLogSlice, uiWidthSlice } from '~/redux/slices';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Header() {
    const dispatch = useDispatch();
    const logStatus = useSelector(checkLogSelector);
    const uiWidth = useSelector(getUiWidth);

    useEffect(() => {
        const handleResize = () => {
            dispatch(
                uiWidthSlice.actions.getUiWidth({
                    state: window.innerWidth,
                }),
            );
        };

        window.addEventListener('resize', handleResize);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleLogin = () => {
        dispatch(
            changeLogSlice.actions.changeLog({
                state: true,
            }),
        );
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* logo */}

                <Button to={routesConfig.home} className={cx('logo-btn')}>
                    <div className={cx('logo')}>
                        <LogoIcon />
                    </div>
                </Button>

                {/* 
                
                nav uiwidth >1200
                
                 */}

                {uiWidth >= 1200 && (
                    <div className={cx('nav')}>
                        <div className={cx('genres-nav')}>
                            <Tippy
                                interactive
                                placement="bottom-start"
                                render={(attrs) => (
                                    <div className={cx('genres-popper')} tabIndex="-1" {...attrs}>
                                        <PopperWrapper className={cx('genres-popper-container')}>
                                            <GenresPopper />
                                        </PopperWrapper>
                                    </div>
                                )}
                            >
                                <div>
                                    <Button text className={cx('nav-btn')}>
                                        genres
                                    </Button>
                                </div>
                            </Tippy>
                        </div>
                        <Button text className={cx('nav-btn')} to={routesConfig.top_airing}>
                            top-airing
                        </Button>
                        <Button text className={cx('nav-btn')} to={routesConfig.popular}>
                            popular
                        </Button>
                        <Button text className={cx('nav-btn')} to={routesConfig.movies}>
                            movies
                        </Button>
                    </div>
                )}

                {/* 
                
                   nav uiwidth < 1200 
                
                 */}

                {uiWidth < 1200 && (
                    <div className={cx('nav-bars')}>
                        <Tippy
                            interactive
                            placement="bottom-start"
                            render={(attrs) => (
                                <div className={cx('bars-popper')} tabIndex="-1" {...attrs}>
                                    <PopperWrapper className={cx('genres-popper-container')}>
                                        <div className={cx('genres-nav')}>
                                            <Tippy
                                                // offset="50 50"
                                                interactive
                                                placement="right-start"
                                                render={(attrs) => (
                                                    <div className={cx('genres-popper')} tabIndex="-1" {...attrs}>
                                                        <PopperWrapper className={cx('genres-popper-container')}>
                                                            <GenresPopper />
                                                        </PopperWrapper>
                                                    </div>
                                                )}
                                            >
                                                <div>
                                                    <Button text className={cx('nav-btn')}>
                                                        genres
                                                    </Button>
                                                </div>
                                            </Tippy>
                                        </div>
                                        <Button text className={cx('nav-btn')} to={routesConfig.top_airing}>
                                            top-airing
                                        </Button>
                                        <Button text className={cx('nav-btn')} to={routesConfig.popular}>
                                            popular
                                        </Button>
                                        <Button text className={cx('nav-btn')} to={routesConfig.movies}>
                                            movies
                                        </Button>
                                    </PopperWrapper>
                                </div>
                            )}
                        >
                            <div>
                                <Button text className={cx('nav-bars-btn')}>
                                    {<FontAwesomeIcon icon={faBars} />}
                                </Button>
                            </div>
                        </Tippy>
                    </div>
                )}

                {/* 
                
                
                 */}
                <Search />

                {/* 
                
                
                
                 */}

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
                                        interactive
                                        placement="bottom-end"
                                        render={(attrs) => (
                                            <div className={cx('user-popper')} tabIndex="-1" {...attrs}>
                                                <PopperWrapper className={cx('user-popper-container')}>
                                                    <UserPopper log={logStatus} />
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
