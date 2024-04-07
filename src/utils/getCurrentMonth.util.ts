export const getCurrentMonth = (): string => {
  const currentDate = new Date();
  const month = currentDate.getMonth() + 1;
  return month.toString();
};
