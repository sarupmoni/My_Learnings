const rotate = (array) => {
  const popped = array.pop();
  return array.unshift(popped);
};
