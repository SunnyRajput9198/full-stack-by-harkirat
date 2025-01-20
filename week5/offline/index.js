//map filter ,arrow function
//given an aaray,give me bak a new array where every value is amulyiple of 2

const input =[2,4,2,6,5]

const ans=input.map((i)=>(i*2))
const ans2=input.map((i)=>{
    return i%2==0})

console.log(ans2)
