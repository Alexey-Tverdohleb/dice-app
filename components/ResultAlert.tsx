import type { FC } from 'react';
import { Alert, AlertTitle, Typography } from '@mui/material';

import { TGameResultData, GuessDirection } from '@/types/game';

interface IProps {
  data?: TGameResultData;
}

const ResultAlert: FC<IProps> = ({ data }) => {
  if (data?.isWin) {
    return (
      <Alert variant="filled" severity="success" sx={{ width: '100%' }}>
        <AlertTitle>You won</AlertTitle>
      </Alert>
    );
  }

  const actualNumberPosition = data?.guessDirection === GuessDirection.Over ? 'smaller' : 'higher';

  return (
    <Alert variant="filled" severity="error" sx={{ width: '100%' }}>
      <AlertTitle>You lost</AlertTitle>
      <Typography variant="subtitle2">Number was {actualNumberPosition}</Typography>
    </Alert>
  );
};

export default ResultAlert;
