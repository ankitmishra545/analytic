export const trimNumber = (num) => {
  if (!num) return;
  return Number(num.toFixed(2));
};

export const randomNumberGenerator = () => {
  return Math.floor(Math.random() * 10);
};
