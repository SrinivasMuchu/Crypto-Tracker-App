export const GettingDate = (number) => {
    const date = new Date(number);
    return date.getDate() + "/" + (date.getMonth() + 1);
  };
  