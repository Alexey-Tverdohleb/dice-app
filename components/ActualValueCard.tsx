import type { PropsWithChildren, FC } from 'react';
import { Card, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';

const ActualValueCard: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Card
      sx={{
        width: '100%',
        height: '200px',
        backgroundColor: grey['100'],
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography variant="h1" component="div">
        {children}
      </Typography>
    </Card>
  );
};

export default ActualValueCard;
