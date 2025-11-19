
---

### 3 .Explain the difference between any, unknown, and never types in TypeScript.

### **any** 
The type any is used when we don't want to check the type or we want to assign any type of data in a variable . It disables type checking , we can assign any type of data in it ,  but it is unsafe to use . 

**Example :**

```ts
let a: any = 10;
a = "shiifat";  
```

### **unknown** 
The type unknown is used when we dont know what will be the type of the data . But in this case we can't use the data without checking it's type . 

**Example :**

```ts
let x: unknown = "hello";
x.trim(); -> this will give error because the type is not checked
if (typeof x === "string") {
  x.trim(); -> this is ok because the type is checked
}
```

### **never**
The type never is for those variable which dont have any value or the functions which will never produce any value .  

**Example :**

```ts
function error(): never {
  throw new Error("Something went wrong");
}

```


---

### 5 . Provide an example of using union and intersection types in TypeScript.


### **Union Type**

```ts
type ID = string | number;

let userId: ID;
userId = 10;     
userId = "abc";  

```

### **Intersection Type**

```ts
type Person = {
  name: string;
};

type Employee = {
  employeeId: number;
};

type Staff = Person & Employee; 

const member: Staff = {
  name: "Shifat",
  employeeId: 101
};

```


