import React from 'react';
import {aux as Aux} from '../../hoc/Auxiliar';
import classes from './Layout.css';

export const layout = (props) =>  (
    <Aux>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
);
