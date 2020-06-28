import React from 'react';
import Style from './recipe.module.css'
import Ingredients from './Ingredients'

const Recipe = ({ title, calories, image, weight, ingredients }) => {  
  

  return (
    <React.Fragment>
      <div className={Style.recipe}>
        <div className="content">
          <h3>RecipeName - {title}</h3>
          <p>TotalCalories - {calories}</p>
          <img className={Style.image} src={image} alt="" />
      </div>
      {ingredients.map((ingredient) => (
        <Ingredients key={Math.random().toString()} 
        ingredient ={ingredient.text} />
        ))}
        </div>
    </React.Fragment>
  );
};

export default Recipe;