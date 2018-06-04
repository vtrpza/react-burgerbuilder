import React from 'react';

import classes from './BuildControls.css';
import {buildControl as BuildControl} from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad'},
    { label: 'Bacon', type: 'bacon'},
    { label: 'Cheese', type: 'cheese'},
    { label: 'Meat', type: 'meat'}
];

export const buildControls = (props) =>  {
    return(
        <div className={classes.BuildControls}>
            {controls.map(ctrl => (
                <BuildControl added={() => props.ingredientAdded(ctrl.type)} key={ctrl.label} label={ctrl.label} />
            ))}
        </div>
    );
};
