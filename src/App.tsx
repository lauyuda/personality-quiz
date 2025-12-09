import { useEffect, useState } from 'react';
import './App.css';
import { Button } from './components/Button';
import { Question } from './components/Question';
import Party from './assets/party.png';
import Ring from './assets/ring.png';
import Results from './assets/results.png';
import Letters from './assets/letters.png';
import Will from './assets/will.jpeg';
import You from './assets/you.jpeg';
import Voucher from './assets/voucher.png';
import confetti from 'canvas-confetti';

function App() {
  const [count, setCount] = useState(0);

  const isHomePage = count === 0;
  const isQuestionsPage = count > 0 && count < 8;
  const isEndPage = count === 8;
  const isBonusQuestion = count === 9;
  const isLetterQuestionOne = count === 10;
  const isLetterQuestionTwo = count === 11;
  const isProposalQuestion = count === 12;
  const isVoucher = count === 13;

  useEffect(() => {
    if (isVoucher) {
      confetti({
        particleCount: 100,
        origin: { y: 1 },
      });
    }
  }, [isVoucher]);

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

      {isBonusQuestion && (
        <div className="flex flex-col items-center justify-center gap-5">
          <div className="text-3xl text-center w-[85%] md:w-[50%] text-gray-800">
            Bonus Question! This is just for fun. No impact on your results.
          </div>
          {/* <Button
            onClick={() => setCount((count) => count + 1)}
            label="Reveal the question"
          /> */}
          <Button onClick={() => setCount(12)} label="Reveal the question" />
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
            Hint: The first characters of each letter and question form a
            message.
          </div>
          <div className="rounded-lg w-40% max-w-[300px] object-cover rounded overflow-hidden">
            <img src={Will} />
          </div>
          <div className="rounded-lg w-40% max-w-[300px] object-cover rounded overflow-hidden">
            <img src={You} />
          </div>
          <div className="border rounded w-[300px] py-2 px-4">
            <div>Morning has arrived...</div>
            <div>AHHH! You almost forgot...</div>
            <div>Right after your long 6 hours class...</div>
            <div>Reaching the party...</div>
            <div>You are going to play a boardgame...</div>
          </div>
          <div className="border rounded w-[300px] py-2 px-4">
            <div>Managing to win a round...</div>
            <div>Even though it is getting late...</div>
          </div>
          <Button
            onClick={() => setCount((count) => count + 1)}
            label="Reveal"
          />
        </div>
      )}
      {isProposalQuestion && (
        <div className="flex flex-col items-center justify-center gap-5">
          <div className="text-3xl text-center w-[85%] text-gray-800">
            <div className="text-lg">Qn. 8/8</div>
            Will you marry me?
          </div>
          <div className="rounded-lg w-50% max-w-[360px] object-cover rounded overflow-hidden">
            <img src={Ring} />
          </div>
          <div className="flex flex-col gap-3 mt-5 w-[85%] md:w-[50%]">
            <Button
              onClick={() => setCount((count) => count + 1)}
              label="Yes"
            />
            <Button onClick={() => {}} label="No" />
          </div>
        </div>
      )}
      {isVoucher && (
        <div className="flex flex-col items-center justify-center gap-5">
          <div className="text-2xl text-center w-[85%] text-gray-800">
            YIPPIE YAY! <br />
            YOU WON A FREE GIFT!
          </div>
          <div className="rounded-lg w-50% max-w-[360px] object-cover rounded overflow-hidden">
            <img src={Voucher} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
