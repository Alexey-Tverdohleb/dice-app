import type { FC } from 'react';

import { Box, Slider, Typography } from '@mui/material';

import { generateSliderMarks } from '@/helpers/utils';

interface IProps {
  value: number;
  min: number;
  max: number;
  setValue(value: number): void;
}

const GuessValueSlider: FC<IProps> = ({ value, min, max, setValue }) => {
  const onGuessValueChange = (event: Event, value: number | number[]) => {
    setValue(value as number);
  };

  const sliderMarks = generateSliderMarks(min, max, 5);

  return (
    <Box sx={{ width: '100%' }}>
      <Slider
        value={value}
        onChange={onGuessValueChange}
        min={min}
        max={max}
        marks={sliderMarks}
        size="small"
        color="secondary"
        valueLabelDisplay="auto"
        step={1}
      />
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="body2" onClick={() => setValue(min)} sx={{ cursor: 'pointer' }}>
          {min}
        </Typography>
        <Typography variant="body2" onClick={() => setValue(max)} sx={{ cursor: 'pointer' }}>
          {max}
        </Typography>
      </Box>
    </Box>
  );
};

export default GuessValueSlider;
