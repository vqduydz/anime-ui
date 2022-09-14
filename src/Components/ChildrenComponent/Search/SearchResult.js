// import classNames from 'classnames/bind';
// import Tippy from '@tippyjs/react/headless';
// import { useContext, useState } from 'react';

// import { Wrapper as PopperWrapper } from '~/Popper/';
// import styles from './Search.module.scss';
// import SearchItems from './SearchItems';
// import { SearchRequest } from '~/Requests/SearchRequest';
// import { SearchContext } from '~/Requests/SearchRequest';

// const cx = classNames.bind(styles);

// function SearchResult({ children, className, searchValue }) {
//     const [showResult, setShowResult] = useState(true);
//     const content = useContext(SearchContext);

//     console.log(content);

//     const renderContent = () => {
//         return content.map((item, index) => <SearchItems key={index} data={item} />);
//     };

//     const classes = cx('search-result-popper', className);

//     const handleHideResult = () => setShowResult(false);
//     return (
//         <SearchRequest searchValue={searchValue} searchResult>
//             <Tippy
//                 visible={showResult}
//                 interactive
//                 placement="bottom-end"
//                 render={(attrs) => (
//                     <div className={classes} tabIndex="-1" {...attrs}>
//                         <PopperWrapper className={cx('search-result-container')}>
//                             <h4 className={cx('search-result-title')}>Anime</h4>
//                             {renderContent()}
//                         </PopperWrapper>
//                     </div>
//                 )}
//                 onClickOutside={handleHideResult}
//             >
//                 {children}
//             </Tippy>
//         </SearchRequest>
//     );
// }

// export default SearchResult;
