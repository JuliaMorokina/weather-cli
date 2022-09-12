

const getArgs = (args) => {
  const res = {};
  const [executor, file, ...otherArgs] = args;

  otherArgs.forEach((value, index, arr) => {
    const nextValue = arr[index + 1] ?? null;

    if(value.charAt(0) === "-") {
      const argKey = value.substring(1);
      if(nextValue && nextValue.charAt(0) !== "-") {
        res[argKey] = nextValue;
      } else {
        res[argKey] = true;
      }
    }
  });

  return res;
};

export { getArgs };