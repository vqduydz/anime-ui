import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './AnimeItems.module.scss';

import ContentItem from './ContentItem';

const cx = classNames.bind(styles);

function ChildComponent({ content = [] }) {
    console.log(content);
    const [uiWidth, setUiwith] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setUiwith(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
    }, []);

    let style;

    if (uiWidth <= 768) {
        style = {
            colWith: '200px',
            colCount: 2,
            gridGap: '12px',
        };
    } else if (uiWidth > 767 && uiWidth <= 970) {
        style = {
            colWith: '200px',
            colCount: 3,
            gridGap: '14px',
        };
    } else if (uiWidth > 971 && uiWidth <= 1300) {
        style = {
            colWith: '200px',
            colCount: 4,
            gridGap: '16px',
        };
    } else if (uiWidth > 1301 && uiWidth <= 1630) {
        style = {
            colWith: '200px',
            colCount: 5,
            gridGap: '18px',
        };
    } else if (uiWidth > 1629 && uiWidth <= 1800) {
        style = {
            colWith: '200px',
            colCount: 6,
            gridGap: '20px',
        };
    } else if (uiWidth > 1801 && uiWidth <= 1900) {
        style = {
            colWith: '200px',
            colCount: 7,
            gridGap: '22px',
        };
    } else if (uiWidth >= 1901 && uiWidth <= 2200) {
        style = {
            colWith: '200px',
            colCount: 8,
            gridGap: '24px',
        };
    } else {
        style = {
            colWith: '200px',
            colCount: 9,
            gridGap: '24px',
        };
    }

    const renderContent = () => {
        return content.map((item, index) => <ContentItem key={index} data={item} />);
    };

    return (
        <div
            className={cx('container')}
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
