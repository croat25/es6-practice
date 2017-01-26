function greet(name="bruno"){
	//console.log("hello "+ name+ "!");
		console.log(`Hello ${name}`);

}
greet();
greet("viva");

console.log(`1 + 6 = ${1+6}`);

console.log(`hey,

this kind of looks like an email!


-Andrew`);



var person={
	name:"bruno",
	age:24
};

var defaultperson={
	name:'Anonymous',
	age:0
}
//function

function welcomebaby(person=defaultperson){
	console.log(`Hey there ${person.name}  you are ${person.age} old`);

}

welcomebaby();
welcomebaby(person);

