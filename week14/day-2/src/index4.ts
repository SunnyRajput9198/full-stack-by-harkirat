//types in typescript

type Employeee={
    name:string,
    startDate:string
}

type Manager={
    name:string,
    department:string,
}

type teamlead=Employeee&Manager;

let e:Employeee={
    name:"harkirat",
    startDate:"2020-10-10"
}

let m:Manager={
    name:"harkirat",
    department:"IT"
}

let tl:teamlead={
    name:"harkirat",
    startDate:"2020-10-10",
    department:"IT"
}


type Gooduser={
    name:string,
    gift:string
}

type Baduser={
    name:string,
    ip:string
}

type User1=Gooduser|Baduser;

let g:Gooduser={
    name:"harkirat",
    gift:"chocolate"
}

let b:Baduser={
    name:"harkirat",
    ip:"127.0.0.1"
}

let u1:User1={
    name:"harkirat",
    gift:"chocolate",
    ip:"127.0.0.1"
}