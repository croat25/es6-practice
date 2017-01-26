// class Person{
// 	constructor(name){
// 		this.name=typeof name ==='string'? name:"anon";
// 		//this name = if type of name is string otherwaise give
// 		//default wvalue of anon
// 	}
// 	set name(val){
// 			this._name=Person.capitalizedword(val);
// 	}
// 	get name(){
// 			return this._name;
// 	}
// 	printGreeting(){
// 		console.log(`Hi i am ${this.name}!`);
// 	}
// 	static capitalizedword(word){
// 		return word[0].toUpperCase()+word.slice(1);
// 	}
// }


// var person1 = new Person("andrew");

// person1.printGreeting();

// var person2= new Person();
// person2.printGreeting();


// console.log(Person.capitalizedword('bruno'));

var obj={
	set age(val){
		this._age=val+10;
	},
	get age(){
		return this._age
	}
}
obj.age=21;
console.log(obj.age);