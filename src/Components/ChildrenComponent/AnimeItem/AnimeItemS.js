import { useSelector } from 'react-redux';
import classNames from 'classnames/bind';

import styles from './AnimeItem.module.scss';
import ContentItem from './ContentItem';
import { getUiWidth } from '~/redux/selector';

const cx = classNames.bind(styles);

function ChildComponent({ content = [] }) {
    const uiWidth = useSelector(getUiWidth);

    let style;

    // if (uiWidth <= 970) {
    //     style = {
    //         colWith: '200px',
    //         colCount: 2,
    //         gridGap: '8px',
    //     };
    // } else if (uiWidth > 971 && uiWidth <= 1300) {
    //     style = {
    //         colWith: '200px',
    //         colCount: 4,
    //         gridGap: '8px',
    //     };
    // } else if (uiWidth > 1301 && uiWidth <= 1900) {
    //     style = {
    //         colWith: '200px',
    //         colCount: 5,
    //         gridGap: '8px',
    //     };
    // } else {
    //     style = {
    //         colWith: '200px',
    //         colCount: 10,
    //         gridGap: '8px',
    //     };
    // }

    if (uiWidth <= 600) {
        style = {
            colWith: '200px',
            colCount: 2,
            gridGap: '8px',
        };
    } else if (uiWidth > 601 && uiWidth <= 900) {
        style = {
            colWith: '200px',
            colCount: 3,
            gridGap: '8px',
        };
    } else if (uiWidth > 901 && uiWidth <= 1200) {
        style = {
            colWith: '200px',
            colCount: 4,
            gridGap: '8px',
        };
    } else if (uiWidth > 1201 && uiWidth <= 1400) {
        style = {
            colWith: '200px',
            colCount: 5,
            gridGap: '8px',
        };
    } else if (uiWidth > 1401 && uiWidth <= 1600) {
        style = {
            colWith: '200px',
            colCount: 6,
            gridGap: '8px',
        };
    } else if (uiWidth > 1601 && uiWidth <= 1800) {
        style = {
            colWith: '200px',
            colCount: 7,
            gridGap: '8px',
        };
    } else {
        style = {
            colWith: '200px',
            colCount: 8,
            gridGap: '8px',
        };
    }

    const renderContent = () => {
        return content.map((item, index) => <ContentItem key={index} data={item} />);
    };

    return (
        <div
            className={cx('s-container')}
            style={{
                '--column-width': `${style.colWith}`,
                '--column-count': `${style.colCount}`,
                '--grid-gap': `${style.gridGap}`,
            }}
        >
            {renderContent()}
        </div>
    );
}

export default ChildComponent;
