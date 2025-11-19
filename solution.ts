type FormatType = string | number | boolean;

const formatValue = (input: FormatType): FormatType => {
  if (typeof input === "string") {
    return input.toUpperCase();
  } else if (typeof input === "number") {
    return input * 10;
  } else {
    return !input;
  }
};

type LenghtType = string | number[];

const getLength = (input: LenghtType): number => {
  if (typeof input === "string") {
    return input.length;
  } else {
    return input.length;
  }
};





class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    return `'Name : ${this.name} , Age : ${this.age}'`;
  }
}






type Item = {
  title: string;
  rating: number;
};

const filterByRating = (arr: Item[]) => {
  const filteredArray = arr.reduce((acc: Item[], item: Item): Item[] => {
    if (item.rating >= 4) {
      acc.push(item);
    }

    return acc;
  }, []);

  return filteredArray;
};

type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

const filterActiveUsers = (users: User[]) => {
  return users.filter((user) => user.isActive);
};

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (book: Book) => {
  console.log(
    `Title : ${book.title} , Author : ${book.author} , Published : ${
      book.publishedYear
    } , Available : ${book.isAvailable ? "Yes" : "No"}`
  );
};




type UniqueValue = (string | number)[];

const getUniqueValues = (
  array1: UniqueValue,
  array2: UniqueValue
): UniqueValue => {


  for(const elm1 of array2){
    let hasSeen = false ;
    for(const elm2 of array1){
      if(elm1 === elm2){
        hasSeen = true;
      }
    }

    if(!hasSeen){
      array1.push(elm1);
    }
  }

  return array1;
};





type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};

const calculateTotalPrice = (arr: Product[]) : number => {
  let totalPrice = 0;
  arr.map((item) => {
    if (item.discount) {
      totalPrice += item.price * item.quantity * (1-item.discount / 100);
    }
    else totalPrice += item.price * item.quantity;
  });

  return totalPrice;
};


