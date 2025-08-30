import { useState } from 'react';
import './App.css';
import { Button } from './components/Button';
import { Question } from './components/Question';
import Party from './assets/party.png';
import Ring from './assets/ring.png';
import Results from './assets/results.png';
import Letters from './assets/letters.png';
import Will from './assets/will.jpeg';
import You from './assets/you.jpeg';

function App() {
  const [count, setCount] = useState(0);

  const isHomePage = count === 0;
  const isQuestionsPage = count > 0 && count < 8;
  const isEndPage = count === 8;
  const isLetterQuestionOne = count === 9;
  const isLetterQuestionTwo = count === 10;
  const isBonusQuestion = count === 11;

  return (
    <div className="bg-linear-to-br from-[#B1DEF5] via-[#D7EAF6] to-[#B1DEF5] min-h-screen h-screen flex flex-col items-center justify-center font-nunito text-gray-800">
      {isHomePage && (
        <div className="w-full flex flex-col items-center justify-center gap-5">
          <div className="text-2xl text-center w-[85%] md:w-[50%]">
            Are you ready to find out your party snack guest type?
          </div>
          <div className="rounded-lg w-50% max-w-[360px] aspect-square object-cover rounded overflow-hidden">
            <img src={Party} />
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
          <div className="text-lg text-center w-[360px] text-gray-800">
            Congratulations! You have completed the quiz. Here are your results.
          </div>
          <div className="rounded-lg w-50% max-w-[360px] object-cover rounded overflow-hidden">
            <img src={Results} />
          </div>
          <Button
            onClick={() => setCount((count) => count + 1)}
            label="Continue"
          />
        </div>
      )}

      {isLetterQuestionOne && (
        <div className="flex flex-col items-center justify-center gap-5">
          <div className="text-lg text-center w-[85%] md:w-[50%] text-gray-800">
            Do you remember the letters which I wrote for you? There is a secret
            behind them.
          </div>
          <div className="rounded-lg w-50% max-w-[360px] object-cover rounded overflow-hidden">
            <img src={Letters} />
          </div>
          <Button
            onClick={() => setCount((count) => count + 1)}
            label="Continue"
          />
        </div>
      )}
      {isLetterQuestionTwo && (
        <div className="flex flex-col items-center justify-center gap-5">
          <div className="text-lg text-center w-[85%] md:w-[50%] text-gray-800">
            Along with the first letters of the first seven questions, the first
            letters form a word.
          </div>
          <div className="rounded-lg w-50% max-w-[360px] object-cover rounded overflow-hidden">
            <img src={Will} />
          </div>
          <div className="rounded-lg w-50% max-w-[360px] object-cover rounded overflow-hidden">
            <img src={You} />
          </div>
          <div className="border w-[360px]">
            <div>Morning</div>
            <div>AHHH</div>
            <div>Right</div>
            <div>Reaching</div>
            <div>You</div>
          </div>
          <div className="w-[360px]">
            <div>Managing</div>
            <div>Even</div>
          </div>
          <Button
            onClick={() => setCount((count) => count + 1)}
            label="Reveal"
          />
        </div>
      )}
      {isBonusQuestion && (
        <div className="flex flex-col items-center justify-center gap-5">
          <div className="text-3xl text-center w-[85%] md:w-[50%] text-gray-800">
            Bonus Question! This is just for fun. No impact on your results.
          </div>
          <div className="rounded-lg w-50% max-w-[360px] object-cover rounded overflow-hidden">
            <img src={Ring} />
          </div>
          <div className="flex flex-col gap-3 mt-5 w-[85%] md:w-[50%]">
            <Button onClick={() => setCount(0)} label="Yes" />
            <Button onClick={() => {}} label="No" />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
