import React from 'react'; 

import classes from './BuildControl.css';

export const buildControl = (props) =>  (
    <div className={classes.BuildControl}>
        <div className={classes.label}>{props.label}</div>
        <button className={classes.Less}>Less</button>
        <button className={classes.More} onClick={props.added}>More</button>
    </div>
);
