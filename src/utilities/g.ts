const getItem = <T>(arr: T[]): T => {
  return arr[1];
};

console.log(getItem<number>([1, 2, 3]))