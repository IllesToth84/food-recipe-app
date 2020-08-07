import React from 'react';
import style from './recipe.module.css';



const Recipe = ({title,calories,image,ingredients}) => {
return(
    <div className={style.recipe}>
        <h1>{title}</h1>
        <div>
            {ingredients.map(ingredient => (
                <p>{ingredient.text}</p>
            ))}
        </div>
        <h3>{Math.floor(calories) + " kcal"}</h3>
        <img className={style.image} src={image} alt="" />

    </div>
);
}

export default Recipe;
