export const getRandomValueInRange = (min: number, max: number): number => {
  if (min > max) {
    throw new Error("The 'min' value must not be greater than the 'max' value.");
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
};
