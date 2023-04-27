import getRandomIntInclusive from '../get_random_int.js';
import playGames from '../index.js';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  let divider = 2;
  while (divider <= num / 2) {
    if (num % divider === 0) {
      return false;
    }
    divider += 1;
  }
  return true;
};

const generateRoundofPrimeGame = () => {
  const number = getRandomIntInclusive(1, 20);
  const rightAnswer = isPrime(number) ? 'yes' : 'no';
  return [`${number}`, rightAnswer];
};

const playProgressionGame = () => {
  const primeGameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no"';
  playGames(primeGameDescription, generateRoundofPrimeGame);
};

export default playProgressionGame;
