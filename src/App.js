import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import './App.css'

const App = () => {

  let APP_ID = 'c85d5c73';
  let APP_KEY = '78878dc4c6650e19b2cb13f0c814f730';


  const [recipes, setRecipes] = useState([]);
  // search state
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState("apple")

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`,
      
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = e =>{
    setSearch(e.target.value);
   
  };

  const getSearch = e =>{
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }


  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
          placeholder="Search new Recipes"
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="recipes">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.calories}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            weight={recipe.recipe.totalWeight}
            ingredients={recipe.recipe.ingredients}
          />
        ))}

        {/* <Recipe /> */}
      </div>
    </div>
  );
};

export default App;
