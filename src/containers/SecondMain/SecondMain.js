import React from 'react';
import classes from './SecondMain.module.scss'
import Dependencies from "../../components/Dependencies/Dependencies";
import {Link} from "react-router-dom";

const SecondMain = (props) => {
    const cls = [classes.SecondMain];

    return (
        <div className={cls.join(' ')}>

            <h2>SecondMain container</h2>

            <Dependencies/>

            <Link to={'/'}>
                <button style={{margin: '20px'}}>Перейти в FirstMain</button>
            </Link>
        </div>
    );
};

export default SecondMain;