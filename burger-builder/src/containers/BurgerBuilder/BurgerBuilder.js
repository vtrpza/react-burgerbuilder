import React, { Component } from 'react';
import {aux as Aux} from '../../hoc/Aux';

export default class BurgerBuilder extends Component {
    render() {
        return (
            <Aux>
                <div>Burger</div>
                <div>Build Controls</div>
            </Aux>
        );
    }
}
