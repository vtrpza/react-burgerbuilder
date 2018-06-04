import React, { Component } from 'react';

import {aux as Aux} from '../../hoc/Auxiliary';
import {burger as Burger} from '../../components/Burger/Burger';

export default class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 1,
            bacon: 1,
            cheese: 2,
            meat: 2
        }
    }

    render() {
        return (
            <Aux> 
                <Burger ingredients={this.state.ingredients}/>
                <div>Build Controls</div>
            </Aux>
        );
    }
}
