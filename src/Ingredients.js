import React from "react";

const Ingredients = (props) => {
  return (
    <React.Fragment>
    
        <ul className="recipe-list">
          <li>{props.ingredient}</li>
        </ul>
      
    </React.Fragment>
  );
};

export default Ingredients;
