import { SliderMark } from '@mui/material';

// helper for mater=ial UI slider to generate marks array
export const generateSliderMarks = (min: number, max: number, chunks: number) => {
  if (chunks <= 0) throw new Error('Chunks must be greater than 0');

  const step = (max - min) / chunks;

  return Array.from({ length: chunks + 1 }, (_, i) => ({
    value: min + i * step,
  }));
};

export const capitalizeFirstLetter = (s: string): string =>
  s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
