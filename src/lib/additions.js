const OPERAND = '+';
const MIN = 0;
const MAX = 9999;

export const createListAdditions = number => {
  return [...Array(number)].map(() => {
    return createAddition(MIN, MAX);
  });
};
const createAddition = (min, max) => {
  return {
    operand: OPERAND,
    n1: createRandomNumber(min, max),
    n2: createRandomNumber(min, max),
  };
};

const createRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};
