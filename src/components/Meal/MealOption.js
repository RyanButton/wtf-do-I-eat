import styled from "styled-components";

const MealOptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 32px;
`;
MealOptionContainer.displayName = "MealOptionContainer";

const MealOptionInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
MealOptionInfo.displayName = "MealOptionInfo";

export function MealOption(meal) {
  if (JSON.stringify(meal.meal) === "[]") {
    return <></>;
  } else {
    const mealData = meal.meal.meals[0];
    return (
      <MealOptionContainer>
        <h2>{JSON.stringify(mealData.strMeal)}</h2>
        <img src={`${mealData.strMealThumb}`} style={{ maxWidth: "500px" }} />
        <MealOptionInfo>
          <strong>
            {mealData.strArea} {mealData.strCategory}
          </strong>
        </MealOptionInfo>
      </MealOptionContainer>
    );
  }
}
