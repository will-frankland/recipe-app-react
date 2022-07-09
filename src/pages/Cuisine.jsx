import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Grid, Card } from './Styles';

export default function Cuisine() {

  const [cuisine, setCuisine] = useState([]);
  let params = useParams();

const getCuisine = async(name) => {
  const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`)
  const recipes = await data.json();
  setCuisine(recipes.results)
};

useEffect(() => {
  getCuisine(params.type);
}, [params.type])

  return (
    <Grid>
      {cuisine.map((item) => {
        return(
          <Card key={item.id}>
            <img src={item.image} alt="" />
            <h4>{item.title}</h4>
          </Card>
        )
      })}
    </Grid>
  )
};