interface User {
    id: string;
    name: string;
    age: number;
    email: string;
    password: string;
}

//pick alows you to pick only the properties you want from the interface as well as type
//For a profile display only pick the name and age and email
type Updateprops = Pick<User, 'name' | 'age' | 'email'>;

const displayProfile = (user: Updateprops) => {
    console.log(`Name: ${user.name},email: ${user.email},age: ${user.age}`);
}
displayProfile({name: 'harkirat', age: 20, email: 'harkirat@gmail.com'})

//Exclude-->in  a type you can exclude the properties you don't want to pick

// Event is a union type that includes 'click', 'scroll', and 'mousemove'.
// Exclude<Event, 'scroll'> removes 'scroll' from the Event union.
// As a result, ExcludeEvent becomes 'click' | 'mousemove'.

type event = 'click' | 'scroll' | 'mousemove';
type ExcludeEvent = Exclude<event, 'scroll'>; // 'click' | 'mousemove'

const handleEvent = (event: ExcludeEvent) => {
  console.log(`Handling event: ${event}`);
};

handleEvent('click'); // OK