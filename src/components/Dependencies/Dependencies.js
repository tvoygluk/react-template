import React from 'react';
import classes from './Dependencies.module.scss'
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";

const Dependencies = (props) => {
    const cls = [classes.Dependencies];

    return (
        <Auxiliary key={'1234'}>

            <div className={cls.join(' ')}>
                <h3>Dependencies component</h3>

                <ul>
                    <li><span>react-router-dom</span></li>
                    <li><span>node-sass</span></li>
                </ul>
            </div>

        </Auxiliary>
    );
};

export default Dependencies;