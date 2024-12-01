{
  type Person = {
    name: string;
    age: number;
  };
  // InterFace
  interface Person1 {
    name: string;
    age: number;
  }

  const newPerson = {
    name: "Rana",
    age: 20,
    roll: 29,
  };

  // console.log(newPerson);

  //  Interface for array
  type roll1 = number[];
  const boysRoll: roll1 = [2, 4, 5, 79, 3, 98];

  interface roll2 {
    [index: number]: number;
  }
  const girlsRoll: roll2 = [3, 4, 32, 76, 34];

  //  Interface for Function
  type fun1=(num1:number,num2:number)=>number

  interface fun2{
    (num1:number,num2:number):number
  }
}
