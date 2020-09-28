import React from 'react';
import classes from './Footer.module.scss'

const Footer = () => {
    const cls = [classes.Footer];

    return (
        <footer className={cls.join(' ')}>
            <span>Footer container</span>
        </footer>
    );
};

export default Footer;