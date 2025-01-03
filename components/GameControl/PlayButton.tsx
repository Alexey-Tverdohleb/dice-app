import type { FC, PropsWithChildren } from 'react';
import { Button } from '@mui/material';

interface IProps {
  onClick?: () => void;
}

const PlayButton: FC<PropsWithChildren<IProps>> = ({ onClick, children }) => {
  return (
    <Button
      onClick={() => onClick?.()}
      fullWidth
      variant="contained"
      color="secondary"
      size="large"
    >
      {children ?? 'Play'}
    </Button>
  );
};

export default PlayButton;
