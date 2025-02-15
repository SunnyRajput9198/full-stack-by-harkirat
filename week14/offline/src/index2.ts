//partial type
interface User {
  id: string;
  name: string;
  age: number;
  email: string;
  password: string;
}

//partial makes all the properties of a type optional creating a new type WITH THE SAME PROPERTIES EACH marked as optional
type PartialUser = Partial<User>;

const displayProfile1 = (user: PartialUser) => {
  console.log(`Name: ${user.name},email: ${user.email},age: ${user.age}`);
};
displayProfile1({ name: "harkirat", age: 20 });

//readonly

type user = {
  readonly name: string;
  readonly age: number;
};
const user1: user = { name: "harkirat", age: 20 };
// user1.name = "harkirat"; ..givess error because we have made it a read only property if readonly niii hai then we can change the value of it