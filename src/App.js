import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/Layout/Header";
import { LikeButton } from "./components/Buttons/LikeButton";
import { DislikeButton } from "./components/Buttons/DislikeButton";
import { SomethingElseButton } from "./components/Buttons/SomethingElseButton";
import { MealOption } from "./components/Meal/MealOption";
import { MealDetails } from "./components/Meal/MealDetails";
import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const PageContainer = styled.div`
  background-color: #313030;
  padding: 0 10% 5% 10%;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
PageContainer.displayName = "PageContainer";

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
ButtonContainer.displayName = "ButtonContainer";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 5px solid #f3f3f3;
  border-top: 5px solid #3498db;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
  margin: 20px auto;
`;

function App() {
  const [mealOption, setMealOption] = useState([]);
  const [isMealChosen, setIsMealChosen] = useState(false);
  const [optionsCount, setOptionsCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((response) => response.json())
      .then((json) => {
        setMealOption(json);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, [optionsCount]);

  return (
    <>
      <Header />
      <PageContainer>
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <MealOption meal={mealOption} />
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
            {!isMealChosen && (
              <ButtonContainer>
                <LikeButton onClick={() => setIsMealChosen(true)} />
                <DislikeButton
                  onClick={() => setOptionsCount(optionsCount + 1)}
                />
              </ButtonContainer>
            )}
          </>
        )}
      </PageContainer>
    </>
  );
}

export default App;
