import type { FC } from 'react';

import { USER_VALUE_RANGE } from '@/constants/gameSettings';
import { GuessDirection } from '@/types/game';
import GuessDirectionRadioGroup from '@/components/GameControl/GuessDirectionRadioGroup';
import GuessValueSlider from '@/components/GameControl/GuessValueSlider';
import PlayButton from '@/components/GameControl/PlayButton';

interface IProps {
  guessDirection: GuessDirection;
  setGuessDirection: (value: GuessDirection) => void;
  guessValue: number;
  setGuessValue: (value: number) => void;
  handlePlayButtonClick: () => void;
}

const GameControl: FC<IProps> = ({
  guessDirection,
  setGuessDirection,
  guessValue,
  setGuessValue,
  handlePlayButtonClick,
}) => {
  return (
    <>
      <GuessDirectionRadioGroup value={guessDirection} setValue={setGuessDirection} />
      <GuessValueSlider
        value={guessValue}
        setValue={setGuessValue}
        min={USER_VALUE_RANGE.MIN}
        max={USER_VALUE_RANGE.MAX}
      />
      <PlayButton onClick={handlePlayButtonClick} />
    </>
  );
};

export default GameControl;
