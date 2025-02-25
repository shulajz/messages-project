export const isPalindrome = (str) => {
  return str === str.split("").reverse().join("");
};
