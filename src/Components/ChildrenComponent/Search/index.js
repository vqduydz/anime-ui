// import classNames from 'classnames/bind';
// import { createContext, useState } from 'react';

// import { SearchIcon, images } from '~/Components/ChildrenComponent/Icon';
// import SearchResult from './SearchResult';
// import styles from './Search.module.scss';

// export const searchValue = createContext();

// const cx = classNames.bind(styles);

// function Search() {
//     const [searchValue, setSearchValue] = useState('');

//     const handleClear = () => setSearchValue('');

//     return (
//         <div className={cx('wrapper')}>
//             <div className={cx('search')}>
//                 <SearchResult searchValue={searchValue}>
//                     <div className={cx('search-container')}>
//                         <div className={cx('search-content')}>
//                             <input
//                                 value={searchValue}
//                                 placeholder="Search anime"
//                                 onChange={(e) => setSearchValue(e.target.value)}
//                                 spellCheck={false}
//                             />
//                             <button className={cx('search-btn')}>
//                                 <SearchIcon />
//                             </button>
//                             <button className={cx('clear')} onClick={handleClear}>
//                                 <img className={cx('clear-btn')} src={images.clear} alt="" />
//                             </button>
//                         </div>
//                     </div>
//                 </SearchResult>
//             </div>
//         </div>
//     );
// }

// export default Search;
