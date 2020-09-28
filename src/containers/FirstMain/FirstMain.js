import React, {useEffect} from 'react';
import classes from './FirstMain.module.scss'
import Dependencies from "../../components/Dependencies/Dependencies";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {getDataAction} from "../../store/actions/getDataAction";

const FirstMain = props => {
    
    useEffect(() => {
        props.getData();

        // eslint-disable-next-line
        },[]
    );
    
    const cls = [classes.FirstMain];

    return (
        <div className={cls.join(' ')}>

            <h2>FirstMain container</h2>

            <Dependencies />

            <Link to={'/second'}>
                <button style={{margin: '20px'}}>Перейти в SecondMain</button>
            </Link>

        </div>
    );
};

function mapStateToProps (state) {
    return {
        data: state.first.data,
        error: state.first.error,
    };
}

function mapDispatchToProps (dispatch) {
    return {
        getData: () => dispatch(getDataAction()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(FirstMain);