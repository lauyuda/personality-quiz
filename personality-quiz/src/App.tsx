import { useState } from 'react';
import './App.css';
import { Button } from './components/Button';
import { Question } from './components/Question';

function App() {
  const [count, setCount] = useState(0);

  const isHomePage = count === 0;
  const isQuestionsPage = count > 0 && count < 8;
  const isEndPage = count === 8;
  const isBonusQuestion = count === 9;

  return (
    <div className="bg-linear-to-br from-[#B1DEF5] via-[#D7EAF6] to-[#B1DEF5] min-h-screen h-screen flex flex-col items-center justify-center font-nunito text-gray-800">
      {isHomePage && (
        <div className="w-full flex flex-col items-center justify-center gap-5">
          <div className="text-2xl text-center w-[85%] md:w-[50%]">
            Are you ready to find out your party snack guest type?
          </div>
          <Button
            onClick={() => setCount((count) => count + 1)}
            label="Begin the quiz"
          />
        </div>
      )}

      {isQuestionsPage && (
        <Question
          questionNumber={count}
          moveToNextQuestion={() => setCount((count) => count + 1)}
        />
      )}

      {isEndPage && (
        <div className="flex flex-col items-center justify-center gap-5">
          <div className="text-3xl text-center w-[85%] md:w-[50%] text-gray-800">
            Congratulations! You have completed the quiz.
          </div>
          <Button onClick={() => setCount(0)} label="Restart Quiz" />
        </div>
      )}

      {isBonusQuestion && (
        <div className="flex flex-col items-center justify-center gap-5">
          <div className="text-3xl text-center w-[85%] md:w-[50%] text-gray-800">
            Bonus Question! This is just for fun. No impact on your results.
          </div>
          <Button onClick={() => setCount(0)} label="Restart Quiz" />
        </div>
      )}
    </div>
  );
}

export default App;
