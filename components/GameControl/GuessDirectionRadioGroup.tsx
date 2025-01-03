import type { FC, ChangeEvent } from 'react';
import { FormControlLabel, Radio, RadioGroup, FormControl } from '@mui/material';

import { GuessDirection } from '@/types/game';
import { capitalizeFirstLetter } from '@/helpers/utils';

interface IProps {
  value: string;
  setValue: (value: GuessDirection) => void;
}

const GuessDirectionRadioGroup: FC<IProps> = ({ value, setValue }) => {
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value as GuessDirection);
  };

  return (
    <FormControl>
      <RadioGroup value={value} onChange={onChange} row name="guess-diraction-button-group">
        <FormControlLabel
          value={GuessDirection.Under}
          control={<Radio color="secondary" />}
          label={capitalizeFirstLetter(GuessDirection.Under)}
          labelPlacement="start"
        />
        <FormControlLabel
          value={GuessDirection.Over}
          control={<Radio color="secondary" />}
          label={capitalizeFirstLetter(GuessDirection.Over)}
          labelPlacement="start"
        />
      </RadioGroup>
    </FormControl>
  );
};

export default GuessDirectionRadioGroup;
