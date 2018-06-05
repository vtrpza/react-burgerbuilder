import React, { Component } from 'react';

import {aux as Aux} from '../../hoc/Auxiliary';
import {burger as Burger} from '../../components/Burger/Burger';
import {buildControls as BuildControls} from '../../components/Burger/BuildControls/BuildControls'

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

export default class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        //Gets the old count of a ingredient based on the type passed
        //Gets the updated count of a ingredient (oldCount + 1)
        //Spreads the ingredients object inside of updatedIngredients object
        //updatedIngredients object gets the updated count of a ingredient from updatedCount
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        console.log('[Total Price from add]', newPrice );
        //Gets the price to be added based on the type
        //Gets the old totalPrice
        //Gets the updated totalPrice (old price + price to be added)
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
    } 

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0){
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        //Gets the old count of a ingredient based on the type passed
        //Avoids error
        //Gets the updated count of a ingredient (oldCount - 1)
        //Spreads the ingredients object inside of updatedIngredients object
        //updatedIngredients object gets the updated count of a ingredient from updatedCount
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        console.log('[Total Price from remove]', newPrice );
        //Gets the price to be removed based on the type
        //Gets the old totalPrice
        //Gets the updated totalPrice (old price - price to be removed)
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        }
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        //Spreads ingredients state and checks if its key values are equal to zero or not returning true or false
        return (
            <Aux> 
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls 
                ingredientAdded={this.addIngredientHandler}
                ingredientRemoved={this.removeIngredientHandler}
                disabled={disabledInfo}
                price={this.state.totalPrice}/>
            </Aux>
        );
    }
}
