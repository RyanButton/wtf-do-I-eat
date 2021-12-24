import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/Layout/Header";
import { LikeButton } from "./components/Buttons/LikeButton";
import { DislikeButton } from "./components/Buttons/DislikeButton";
import { SomethingElseButton } from "./components/Buttons/SomethingElseButton";
import { MealOption } from "./components/Meal/MealOption";
import { MealDetails } from "./components/Meal/MealDetails";
import { useEffect, useState } from "react";
import styled from "styled-components";

const PageContainer = styled.div`
  background-color: #313030;
  padding: 0 10% 5% 10%;
`;
PageContainer.displayName = "PageContainer";

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
ButtonContainer.displayName = "ButtonContainer";

function App() {
  const [mealOption, setMealOption] = useState([]);
  const [isMealChosen, setIsMealChosen] = useState(false);
  const [optionsCount, setOptionsCount] = useState(0);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((response) => response.json())
      .then((json) => setMealOption(json))
      .catch((err) => console.log(err));
  }, [optionsCount]);

  return (
    <>
      <Header />
      <PageContainer>
        <MealOption meal={mealOption} />
        {!isMealChosen && (
          <ButtonContainer>
            <LikeButton onClick={() => setIsMealChosen(true)} />
            <DislikeButton onClick={() => setOptionsCount(optionsCount + 1)} />
          </ButtonContainer>
        )}
        {isMealChosen && <MealDetails meal={mealOption} />}
        {isMealChosen && (
          <ButtonContainer
            style={{ justifyContent: "left", alignItems: "left" }}
          >
            <SomethingElseButton
              onClick={() => {
                setIsMealChosen(false);
                setOptionsCount(optionsCount + 1);
              }}
            />
          </ButtonContainer>
        )}
      </PageContainer>
    </>
  );
}

export default App;
