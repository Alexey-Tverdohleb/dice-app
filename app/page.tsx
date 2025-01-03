'use client';
import { useState } from 'react';
import { Stack, Box } from '@mui/material';
import dayjs from 'dayjs';

import { RANDOM_VALUE_RANGE, USER_VALUE_RANGE } from '@/constants/gameSettings';
import { GuessDirection, TGameResultData } from '@/types/game';
import ActualValueCard from '@/components/ActualValueCard';
import ResultTable from '@/components/ResultTable';
import ResultAlert from '@/components/ResultAlert';
import GameControl from '@/components/GameControl';
import { getRandomValueInRange } from '@/helpers/random';
import { checkWin } from '@/helpers/game';

export default function Home() {
  const [guessValue, setGuessValue] = useState<number>(USER_VALUE_RANGE.MIN);
  const [guessDirection, setGuessDirection] = useState<GuessDirection>(GuessDirection.Under);

  const [showResultAlert, setShowResultAlert] = useState<boolean>(false);
  const [gameResultHistory, setGameResultHistory] = useState<TGameResultData[]>([]);

  const handlePlayButtonClick = () => {
    const actualValue = getRandomValueInRange(RANDOM_VALUE_RANGE.MIN, RANDOM_VALUE_RANGE.MAX);

    const isWin = checkWin(guessValue, actualValue, guessDirection);

    const resultData: TGameResultData = {
      isWin,
      guessDirection,
      guessValue,
      actualValue,
      time: dayjs(),
    };

    setShowResultAlert(true);
    setGameResultHistory((prevState) => [resultData, ...prevState.slice(0, 9)]);
  };

  const latestResult = gameResultHistory[0];

  return (
    <Stack spacing={4} alignItems="center" sx={{ py: 3, height: '100%' }}>
      <Box sx={{ height: '78px', width: '100%', flexShrink: 0 }}>
        {showResultAlert && latestResult && <ResultAlert data={latestResult} />}
      </Box>
      <Stack width="320px" spacing={2} alignItems="center">
        <ActualValueCard>{latestResult?.actualValue ?? RANDOM_VALUE_RANGE.MAX}</ActualValueCard>
        <GameControl
          guessDirection={guessDirection}
          setGuessDirection={setGuessDirection}
          guessValue={guessValue}
          setGuessValue={setGuessValue}
          handlePlayButtonClick={handlePlayButtonClick}
        />
      </Stack>
      <Box
        sx={{
          flexGrow: 1,
          width: '100%',
          overflowY: 'auto',
        }}
      >
        {gameResultHistory.length > 0 && <ResultTable resultHistory={gameResultHistory} />}
      </Box>
    </Stack>
  );
}
