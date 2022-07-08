import { Wrapper, Card, Gradient } from "./Styles";
import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";


export default function Veggie() {
  const [veggie, setVeggie] = useState([]);

  useEffect(() => {
    getVeggie();
  }, [])

  const getVeggie = async () => {

    // checks local storage (cache) so that API is not refreshed every time (local storage only saves strings)
    const checkStorage = localStorage.getItem('veggie');

    if (checkStorage) {
      setVeggie(JSON.parse(checkStorage))
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`
      );
      const data = await api.json();

      localStorage.setItem('veggie', JSON.stringify(data.recipes))
      console.log(data.recipes)
      setVeggie(data.recipes)
    }
  };


  return (
    <div>
      <Wrapper>
        <h3>Vegetarian Recipes</h3>
        <Splide options={{
          perPage: 3,
          arrows: false,
          pagination: false,
          drag: "free",
          gap: "5rem",
        }}
        >
          {veggie.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <Card>
                  <p>{recipe.title}</p>
                  <img src={recipe.image} alt="recipe.title" />
                  <Gradient />
                </Card>
              </SplideSlide>
            );
          })};
        </Splide>
      </Wrapper>
    </div>
  )
}
