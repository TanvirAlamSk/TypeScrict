{
  // Map Type

  interface InfoNumber {
    houseNo: number;
    roadNo: number;
    phoneNo: number;
  }

  type InfoString = {
    [x in keyof InfoNumber]: string;
  };

  //   use generics
  type Area<T> = {
    [key in keyof T]: T[key];
  };

  const area: Area<{ height: string; width: number }> = {
    height: "100",
    width: 20,
  };
  //
}
