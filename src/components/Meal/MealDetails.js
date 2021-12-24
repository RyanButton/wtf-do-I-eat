import styled from "styled-components";

const MealDetailsContainer = styled.div``;
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

    const measuresKeys = Object.keys(mealData).filter((v) =>
      /^strMeasure/.test(v)
    );

    let ingredients = ingredientKeys.map(function (key) {
      if (mealData[key] !== "") return mealData[key];
      return undefined;
    });

    let measures = measuresKeys.map(function (key) {
      if (mealData[key] !== "") return mealData[key];
      return undefined;
    });

    let temp = [];
    for (let i of ingredients) i && temp.push(i);
    ingredients = temp;

    temp = [];
    for (let i of measures) i && temp.push(i);
    measures = temp;

    const ingredientsMeasures = [];
    for (let i = 0; i < ingredients.length; i++) {
      measures[i]
        ? ingredientsMeasures.push(`${ingredients[i]} - ${measures[i]}`)
        : ingredientsMeasures.push(`${ingredients[i]}`);
    }
    console.log(mealData.strYoutube.replace("watch?v=", "embed/"));
    return (
      <>
        <MealDetailsContainer>
          <h2>Recipe</h2>
          <div>
            <h3 style={{ textAlign: "left" }}>Ingredients</h3>
            <ol>
              {ingredientsMeasures.map((element) => (
                <li>{element}</li>
              ))}
            </ol>
          </div>
          <div>
            <h3 style={{ textAlign: "left" }}>Recipe</h3>
            <p>{mealData.strInstructions}</p>
          </div>
          <div>
            <h3 style={{ textAlign: "left" }}>Video</h3>
            <div className={"model-box"}>
              <iframe
                className={"model"}
                allow={"fullscreen"}
                src={`${mealData.strYoutube.replace("watch?v=", "embed/")}`}
              ></iframe>
            </div>
          </div>
        </MealDetailsContainer>
      </>
    );
  }
}
