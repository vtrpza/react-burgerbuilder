import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

export const burger = (props) =>  {
    
    let transformedIngredients = Object.keys(props.ingredients).map(igKey =>{
        return [...Array(props.ingredients[igKey])].map((_, i) => {
            return <BurgerIngredient key={igKey + i} type={igKey}/>
        });
    }).reduce((arr, el) => {
        return arr.concat(el)
    }, []); 
    
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>;
    }
    
    //turning object of key value pairs into an array of        ingredients
    //flattened the array of ingredients to read its length
    //value is important to define how many ingredients
    //key is important to define which type of ingredients
    //lenght is important to check if it's empty and ask for user input

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};
