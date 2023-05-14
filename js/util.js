export function getRandomNumber(a, b) {
  if (a < 0 || b < 0 ) {
    return;
  }
  const randomNumber = Math.floor(Math.random() * (b - a) ) + a;
  return randomNumber;
}

export function isStringInSize(string, size) {
  if (string.length <= size) {
    return true;
  }
  return false;
}

export const isEscapeKey = (e) => e.key === 'Escape';
