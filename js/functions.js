// eslint-disable-next-line no-unused-vars
function isStringLengthValid(string, maxLength) {
  return string.length <= maxLength;
}

// eslint-disable-next-line no-unused-vars
function isPalindrome(string) {
  const normalizedString = string.replaceAll(' ', '').toLowerCase();
  let reversedString = '';

  for (let i = normalizedString.length - 1; i >= 0; i--) {
    reversedString += normalizedString[i];
  }

  return normalizedString === reversedString;
}
