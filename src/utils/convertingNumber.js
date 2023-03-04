const convertingToNumberWithComma = (number) => {
  const numberString = number.toString();

  const length = numberString.length;

  let result = "";

  for (let i = length - 1; i >= 0; i--) {
    const filter = (length - i) % 3 === 0 && i !== 0 ? "," : "";

    result = filter + numberString[i] + result;
  }

  return result;
};

export default convertingToNumberWithComma;
