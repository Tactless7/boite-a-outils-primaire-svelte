const OPERAND = '+';
const MIN = 0;
const MAX = 99;

export const createListAdditions = number => {
  return [...Array(number)].map(() => {
    return {
      ...createAddition(MIN, MAX),
      answer: '10',
    }
  });
};
const createAddition = (min, max) => {
  const n1 = createRandomNumber(min, max);
  const n2 = createRandomNumber(min, max);

  return {
    operand: OPERAND,
    n1,
    n2,
    result: n1 + n2,
  };
};

const createRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};
