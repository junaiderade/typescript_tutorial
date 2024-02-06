// related to: https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html

// use interface to describe an object's "shape"
interface User {
    name: string;
    id: number;
  }

// there are 2 syntaxes for building types: interfaces and types. type is used for specific features.
// primitive types include: boolean, bigint, null, number, string, symbol, undefined, function and any

const user_1: User = {
    name: "Hayes", //changing a property here will trigger an error
    id: 0,
    //username: 'hay' //cannot have additional property
  };

class UserAccount {
    name: string;
    id: number;

    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
    }

    printName(): void {
        console.log(this.name);
    }

}

const user_2: User = new UserAccount("Murphy", 1);

const user_3: UserAccount = new UserAccount("Yolo", 2);

// A popular use-case for union types is to describe the set of string or number literals that a value is allowed to be
type WindowStates = "open" | "closed" | "minimized";

// Unions provide a way to handle different types too. For example, you may have a function that takes an array or a string
function getLength(obj: string | string[]) {
    return obj.length;
  }

// use typeOf to get the type of a variable
console.log(typeof(user_2) + ' ' + typeof(user_3));

function wrapInArray(obj: string | string[]) {//you don't need return types on functions unless it returns void
    if (typeof obj === "string") {
      return [obj];
              
    }
    return obj;
  }

// Generics provide variables to types. A common example is an array. An array without generics could contain anything. 
//An array with generics can describe the values that the array contains.
type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{ name: string }>;