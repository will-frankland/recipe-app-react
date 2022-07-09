import React, { useState } from 'react';

export default function Cuisine() {

  const [cuisine, setCuisine] = useState([])

const getCuisine = async(name) => {
  const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`)
  const recipes = await data.json();
  setCuisine(recipes.results)
}

  return (
    <div>
      Cuisine
    </div>
  )
}
