import type { Dayjs } from 'dayjs';

export enum GuessDirection {
  Under = 'UNDER',
  Over = 'OVER',
}

export type TGameResultData = {
  guessDirection: GuessDirection;
  guessValue: number;
  actualValue: number;
  time: Dayjs;
  isWin: boolean;
};
