// function sayHello(name = "world"){
// 	console.log("Hello "+name+" !");

// }

// sayHello();

// sayHello("viva");

function greetuser(user={name:'Anonymous'}){
	console.log("Hello "+ user.name+" !");
}

greetuser();
greetuser({name:'viva'});
