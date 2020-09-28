import React from 'react';
import classes from './Header.module.scss'

const Header = () => {
    const cls = [classes.Header];

    return (
        <header className={cls.join(' ')}>
            <span>Header container</span>
        </header>
    );
};

export default Header;