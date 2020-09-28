import React from 'react';
import classes from './FirstMain.module.scss'
import Dependencies from "../../components/Dependencies/Dependencies";
import {Link} from "react-router-dom";

const FirstMain = (props) => {
    const cls = [classes.FirstMain];

    return (
        <div className={cls.join(' ')}>

            <h2>FirstMain container</h2>

            <Dependencies/>

            <Link to={'/second'}>
                <button style={{margin: '20px'}}>Перейти в SecondMain</button>
            </Link>

        </div>
    );
};

export default FirstMain;