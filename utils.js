export function getRandomElement(arr) {
  const index = Math.floor(Math.random() * arr.length);
  return arr[index];
}
// This function returns a random element from the provided array.
// It calculates a random index based on the length of the array and returns the element at that

export default {
  getRandomElement
};
