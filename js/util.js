const getRandomNumber = function(a, b) {
  if (a < 0 || b < 0 ) {
    return;
  }
  const randomNumber = Math.floor(Math.random() * (b - a) ) + a;
  return randomNumber;
};

const isStringInSize = function(string, size) {
  if (string.length <= size) {
    return true;
  }
  return false;
};

export { getRandomNumber, isStringInSize };
