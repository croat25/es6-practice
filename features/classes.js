class Person{
	constructor(name){
		this.name=typeof name ==='string'? name:"anon";
		//this name = if type of name is string otherwaise give
		//default wvalue of anon
	}
	printGreeting(){
		console.log(`Hi i am ${this.name}!`);
	}
	static capitalizedword(word){
		return word[0].toUpperCase()+word.slice(1);
	}
}


var person1 = new Person("andrew");

person1.printGreeting();

var person2= new Person();
person2.printGreeting();


console.log(Person.capitalizedword('bruno'));