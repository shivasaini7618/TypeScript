// obj , array , tuple , enum
// const person :{
//   firstName:string,
//   age: number,
//   xyz:{
//     address:string
//   },
//   skills: string[];
// } = {
//   firstName : "shiva",
//   age : 23,
//   xyz: {
//     address: "mumbai"
//   },
//   skills :["node.js" , "react.js" , "js" , "express"]
// }
// console.log(person);
// const person :{
//   name:string,
//   age: number,
//   product: [string , number ];
// } ={
//   name :"shiva",
//   age:21,
//   product : ["sempoo" , 21]
// }
var Role;
(function (Role) {
    Role[Role["admin"] = 0] = "admin";
    Role[Role["user"] = 1] = "user";
    Role[Role["author"] = 2] = "author";
})(Role || (Role = {}));
var person = {
    name: "shiva",
    age: 21,
    skills: ["react", "node"],
    role: Role.author
};
if (person.role === Role.user) {
    console.log("user");
}
else if (person.role === Role.admin) {
    console.log("admin");
}
else {
    console.log("author");
}
