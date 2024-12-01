{
  // generics
  type arrNum = number[];
  type arrStr = string[];
  type arrBool = boolean[];

  const numArray: arrNum = [23, 5, 7, 8, 2, 32, 7];
  const strintArray: arrStr = ["hjdg", "ekfwugfyiugw", "tew"];
  const booleanArray: arrBool = [true, false, false];

  //   by generics
  type genericArr<T> = Array<T>;

  const numArr: genericArr<number> = [32, 35, 546, 6645];
  const strArr: genericArr<string> = ["ljdgeug", "kehf", "wellkhguweg"];
  const boolArr: genericArr<boolean> = [true, false];

  const objArr: genericArr<{ name: string; roll: number }> = [
    {
      name: "full kumari",
      roll: 1202,
    },
    {
      name: "pushpa rani",
      roll: 53,
    },
  ];
}
