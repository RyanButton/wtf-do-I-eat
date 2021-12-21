import styled from "styled-components";

const MealDetailsContainer = styled.div`
  margin-left: 200px;
  margin-right: 200px;
`;
MealDetailsContainer.displayName = "MealOptionContainer";

export function MealDetails(meal) {
  if (JSON.stringify(meal.meal) === "[]") {
    return <></>;
  } else {
    const mealData = meal.meal.meals[0];
    // grabbing ingredient data and cleaning it up
    const ingredientKeys = Object.keys(mealData).filter((v) =>
      /^strIngredient/.test(v)
    );
    let ingredients = ingredientKeys.map(function (key) {
      if (mealData[key] !== "") return mealData[key];
    });
    let temp = [];
    for (let i of ingredients) i && temp.push(i);
    ingredients = temp;
    console.log(mealData.strYoutube);
    console.log(mealData.strYoutube.replace("watch", "embed"));
    return (
      <>
        <MealDetailsContainer>
          <div>
            <h3 style={{ textAlign: "left" }}>Ingredients</h3>
            <ol>
              {ingredients.map((ingredient) => (
                <li>{ingredient}</li>
              ))}
            </ol>
          </div>
          <div>
            <h3 style={{ textAlign: "left" }}>Recipe</h3>
            <p>{mealData.strInstructions}</p>
          </div>
          <div>
            <h3 style={{ textAlign: "left" }}>Video</h3>
            <iframe
              allow={"fullscreen"}
              style={{ width: "560px", height: "315px" }}
              src={`${mealData.strYoutube.replace("watch?v=", "embed/")}`}
            ></iframe>
          </div>
        </MealDetailsContainer>
      </>
    );
  }
}
