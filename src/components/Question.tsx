import { Button } from './Button';
import Friends from '../assets/friends.png';
import Food from '../assets/food.png';
import Clock from '../assets/clock.png';

const getQuestionInfo = (questionNumber: number) => {
  switch (questionNumber) {
    case 1:
      return {
        imageUrl:
          'https://cdn.openart.ai/uploads/image_myaHH9oV_1756292811162_raw.jpg',
        questionText:
          "Morning has arrived! You recall having a late night from discussing today's party and struggled out of bed. What is the first thing you do after waking up?",
        options: [
          'Take your time to choose what you want to have for your breakkie',
          "Check your phone to see what updates about today's party you missed",
        ],
      };
    case 2:
      return {
        imageUrl:
          'https://cdn.openart.ai/uploads/image_V0AKwNnP_1756293064221_raw.jpg',
        questionText:
          'AHHH! You almost forgot you have a class booked today and you are going to be late! QUICK! Do you remember whose class have you chosen to attend?',
        options: ['Steel combat Muay Thai champion', 'Mystic zen yoga guru'],
      };
    case 3:
      return {
        imageUrl: Friends,
        questionText:
          'Right after your long 6 hours class, it is time to head for the dinner party. You and your friends decided to meetup and head there together. However, none of you are sure of the way, what do you do?',
        options: [
          'Lead the way using your GPS navigator',
          'Stay behind the pack and follow',
        ],
      };
    case 4:
      return {
        imageUrl: Food,
        questionText:
          'Reaching the party, you find that you are the last group to arrive. Everything has been setup and ready for you to start eating. Which food catches your eye most?',
        options: [
          'Steamed cod fish — who can resist such a yummy fish?',
          'Sourdough bread — who doesnt love a good snack?',
        ],
      };
    case 5:
      return {
        imageUrl:
          'https://cdn.openart.ai/uploads/image_04mC_R3P_1756295194583_raw.jpg',
        questionText:
          'You are going to play a boardgame after the meal. Your friend who introduced the game announces that the winners will receive a prize. What is your strategy going to be?',
        options: [
          'Just go with your intuition',
          'Systematic and calculated moves',
        ],
      };
    case 6:
      return {
        imageUrl:
          'https://cdn.openart.ai/uploads/image_nMx3ayaK_1756295765954_raw.jpg',
        questionText:
          'Managing to win a round, your friend who owns a cafe says you get to choose a drink and will be personally served by her. Which drink will you pick?',
        options: ['Refreshing fruity tea', 'Hot matcha latte'],
      };
    case 7:
      return {
        imageUrl: Clock,
        questionText:
          'Even though it is getting late, the party is still going strong and your friend offers you to stay the night. How will you conclude the night?',
        options: [
          'Stay the night and continue gossiping',
          'Call a taxi home to rest',
        ],
      };
    default:
      return {
        imageUrl: '',
        questionText: '',
        options: ['One', 'Two'],
      };
  }
};

export const Question = ({
  questionNumber,
  moveToNextQuestion,
}: {
  questionNumber: number;
  moveToNextQuestion: () => void;
}) => {
  const { imageUrl, questionText, options } = getQuestionInfo(questionNumber);

  return (
    <div className="w-full flex flex-col items-center justify-center overflow-hidden">
      <div className="text-lg text-center">Qn. {questionNumber} / 8</div>

      <div className="mt-5 rounded-lg w-50% max-w-[360px] aspect-square object-cover rounded overflow-hidden">
        <img src={imageUrl} />
      </div>

      <div className="mt-5 text-lg text-center w-[85%] md:w-[50%]">
        {questionText}
      </div>
      <div className="flex flex-col gap-3 mt-5 w-[85%] md:w-[50%]">
        {options.map((option) => (
          <Button key={option} label={option} onClick={moveToNextQuestion} />
        ))}
      </div>
    </div>
  );
};
