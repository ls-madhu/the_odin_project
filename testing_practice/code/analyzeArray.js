function analyzeArray(arr) {
  return {
    average: arr.reduce((accum, curr) => accum + curr) / arr.length,
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length,
  };
}

export default analyzeArray;
