"use strict";
//alert(2+2); we are using a node it will not pop up
/*there are 2 type of data type 
1. primitive
-number=integer value like 1 to 10.............
-BigInt=interger value but the value which have more values like (a= 1234567 )
-string=names or alphabet=name="Tasneem"
-boolean= yes /no type =True or False
-null= standalone value =which means we know value but did not add that value
-undefined= we dont know the value but we have make that variable eg: let state="";
-symbol= the is uniq type of a data types

2.Object:(array//functions)
when we have to define many value in a one block that is called object
eg:
const Subjec={
    fullName:"tasneem shaikh",
    age:18,
    isPass:True
}
*/
const Student={
    fullName:"tasneem shaikh",
    age:18,
    isPass:true
};
console.log(Student)
console.table(Student.age)
console.table(Student["age"])
console.log(typeof Student)
// to change the value of object in const variable
Student["fullName"]="Shakil Shaikh";
console.table(Student)

const profile={
    $userId:"Tannu.shaikh",
    is_Follow:true,
    post1:195,
    followers:569,
    following:4,
    bio:["fresher","scenery lover "]
};
console.log(profile);
console.log(typeof[profile]);
console.log(typeof[profile],profile);
console.log(typeof null);//type of null is Object
console.log(typeof undefined);//type of undefined is undefined
