var myArr = [23,335,34,67,74,244,53535,34,292479874,111,345];

for(var i = 0; i < myArr.length; i++){
    
    console.log(myArr[i]);
}


var person = {  firstName: "Halah",
                lastName:"Salig",
                phoneNumber:1838131837387, 
                email:"halah@gmail.com"
};

console.log(person.firstName);
console.log(person.lastName);

person.first_name= person.firstName;
person.last_name = person.lastName;

console.log(person);

delete person.firstName;
delete person.lastName;

console.log(person);
