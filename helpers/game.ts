import { GuessDirection } from '@/types/game';

export const checkWin = (
  guessValue: number,
  actualValue: number,
  guessDirection: GuessDirection
): boolean => {
  const checkOver = (guessValue: number, actualValue: number) => actualValue > guessValue;
  const checkUnder = (guessValue: number, actualValue: number) => actualValue < guessValue;

  const checkFunction = guessDirection === GuessDirection.Under ? checkUnder : checkOver;

  return checkFunction(guessValue, actualValue);
};
