{
  const kgToGram = (value: string | number): number | string | undefined => {
    if (typeof value == "string") {
      const result = Number(value) * 1000;
      return `${result} grams`;
    } else if (typeof value == "number") {
      const result = value * 1000;
      return result;
    }
  };

  // const res = kgToGram(10) as number;
  const res1 = kgToGram("10") as number;
  console.log(res1);

  type createError = {
    message: string;
  };

  try {
    console.log("hi");
  } catch (error) {
    console.log((error as createError).message);
  }
}
