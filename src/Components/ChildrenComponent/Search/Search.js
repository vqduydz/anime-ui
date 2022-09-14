import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as searchService from '~/apiServices/searchService';
import { SearchIcon, images } from '~/Components/ChildrenComponent/Icon';
import { Wrapper as PopperWrapper } from '~/Popper/';
import SearchItems from './SearchItems';
import styles from './Search.module.scss';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import useDebounce from '~/Hook/useDebounce';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const debounced = useDebounce(searchValue, 800);

    useEffect(() => {
        // fetch API
        (async () => {
            setLoading(true);
            const animelist = await searchService.search(debounced);
            setLoading(false);
            setSearchResult(animelist);
        })();
    }, [debounced]);

    const renderContent = () => {
        return searchResult.map((item, index) => <SearchItems key={index} data={item} />);
    };

    const handleClear = () => setSearchValue('');
    const handleHideResult = () => setShowResult(false);
    const handleShowResult = () => setShowResult(true);

    const handleChange = (e) => {
        const searchValue = e.target.value;

        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('search')}>
                <Tippy
                    visible={showResult && searchResult.length > 0}
                    interactive
                    placement="bottom-end"
                    render={(attrs) => (
                        <div className={cx('search-result-popper')} tabIndex="-1" {...attrs}>
                            <PopperWrapper className={cx('search-result-container')}>
                                <h4 className={cx('search-result-title')}>Anime</h4>
                                {renderContent()}
                            </PopperWrapper>
                        </div>
                    )}
                    onClickOutside={handleHideResult}
                >
                    <div className={cx('search-container')}>
                        <div className={cx('search-content')}>
                            <input
                                value={searchValue}
                                placeholder="Search anime"
                                onChange={handleChange}
                                spellCheck={false}
                                onFocus={handleShowResult}
                            />
                            <button className={cx('search-btn')}>
                                <SearchIcon />
                            </button>
                            <div className={cx('icon')} onClick={handleClear}>
                                {!!searchValue && !loading && (
                                    <img className={cx('clear-btn')} src={images.clear} alt="" />
                                )}
                                {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                            </div>
                        </div>
                    </div>
                </Tippy>
            </div>
        </div>
    );
}

export default Search;
