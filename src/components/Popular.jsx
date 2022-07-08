import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Wrapper, Card, Gradient } from "./Styles";

export default function Popular() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, [])

  const getPopular = async () => {

    // checks local storage (cache) so that API is not refreshed every time (local storage only saves strings)
    const checkStorage = localStorage.getItem('popular');

    if (checkStorage) {
      setPopular(JSON.parse(checkStorage))
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
      );
      const data = await api.json();

      localStorage.setItem('popular', JSON.stringify(data.recipes))
      console.log(data.recipes)
      setPopular(data.recipes)
    }
  };

  return (
    <div>
      <Wrapper>
        <h3>Popular Recipes</h3>
        <Splide options={{
          perPage: 4,
          arrows: false,
          pagination: false,
          drag: "free",
          gap: "5rem",
        }}
        >
          {popular.map((recipe) => {
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
  );
}
