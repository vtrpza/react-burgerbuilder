import React, { Component } from 'react';

import {aux as Aux} from '../../hoc/Auxiliar';
import {burger as Burger} from '../../components/Burger/Burger';

export default class BurgerBuilder extends Component {
    render() {
        return (
            <Aux>
                <Burger/>
                <div>Build Controls</div>
            </Aux>
        );
    }
}
