import React from 'react';
import style from './recipe.module.css'



const Recipe = ({title,ingredients,image,url}) =>{
    return(
        <div className={style.recipe}>
            <h1 >
                {title}
            </h1>
            <img className={style.image} src={image} alt=""/>
            <ol>
                {ingredients.map(ingredient =>(
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <a className={style.recipeLink} style={{display: "table-cell"}} href={url} target="_blank">Recipe Link:</a>
            <p>





            </p>
        </div>
    );
};

export default Recipe;