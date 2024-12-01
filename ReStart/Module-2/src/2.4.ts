{
  interface Developer<T> {
    name: string;
    salary: number;
    phone: T;
  }

  interface Phone {
    company: string;
    model: string;
    price: number;
  }
  const developer1: Developer<Phone> = {
    name: "Prokash",
    salary: 12000,
    phone: {
      company: "Samsung",
      model: "S20 Ultra",
      price: 100000,
    },
  };

  type Phone2 = {
    company: string;
    price: number;
    model: string;
    year: number;
  };
  const developer2: Developer<Phone2> = {
    name: "Panna",
    salary: 150000,
    phone: {
      company: "Apple",
      model: "15 pro max",
      price: 150000,
      year: 2022,
    },
  };

  //   Function with generics

  const foo = <T>(param: T): T[] => {
    return [param];
  };

  const res = foo<String>("12");

  const studentInfo = <T extends { name: string; roll: number }>(params: T) => {
    console.log(params);
  };

  studentInfo<{ name: string; roll: number; email: string }>({
    name: "Rony",
    roll: 100,
    email: "email.com",
  });

  //  Key Of

  const vehicels = <X, Y extends keyof X>(param: X, key: Y) => {
    console.log(param[key]);
  };

  type Car = {
    name: string;
    model: string;
    price: number;
  };
  type newCar = keyof Car;

  const bmw: Car = {
    name: "BMW",
    model: "i8",
    price: 10020,
  };

  const bus = vehicels(bmw, "name");
}
