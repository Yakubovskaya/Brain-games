import getRandomIntInclusive from '../get_random_int.js';
import playGames from '../index.js';

const isEven = (num) => (num % 2 === 0);

function generateRoundofEvenGame() {
  const number = getRandomIntInclusive(1, 50);
  const question = `${number}`;
  const rightAnswer = isEven(number) ? 'yes' : 'no';
  return [question, rightAnswer];
}

export default function playEvenGame() {
  const evenGameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
  playGames(evenGameDescription, generateRoundofEvenGame);
}
