import type { FC } from 'react';
import dayjs from 'dayjs';

import { Table, TableBody, TableCell, TableRow, TableHead, TableContainer } from '@mui/material';

import type { TGameResultData } from '@/types/game';
import { capitalizeFirstLetter } from '@/helpers/utils';

interface IProps {
  resultHistory: TGameResultData[];
}

const columnWidth = '33.3%';

const bodyCellSx = {
  px: '16px',
  py: '6px',
  width: columnWidth,
} as const;

const headerCellSx = {
  p: '16px',
  width: columnWidth,
};

const ResultTable: FC<IProps> = ({ resultHistory }) => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ ...headerCellSx }}>Time</TableCell>
            <TableCell sx={{ ...headerCellSx }}>Guess</TableCell>
            <TableCell sx={{ ...headerCellSx }}>Result</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {resultHistory.map(({ time, guessDirection, guessValue, actualValue, isWin }) => (
            <TableRow key={dayjs(time).valueOf()}>
              <TableCell sx={{ ...bodyCellSx }}>{dayjs(time).format('HH:mm:ss')}</TableCell>
              <TableCell
                sx={{ ...bodyCellSx }}
              >{`${capitalizeFirstLetter(guessDirection)} ${guessValue}`}</TableCell>
              <TableCell sx={{ color: isWin ? 'green' : 'red', ...bodyCellSx }}>
                {actualValue}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ResultTable;
