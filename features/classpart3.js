class Person{
	constructor(name){
		this.name=typeof name ==='string'? name:"anon";
		//this name = if type of name is string otherwaise give
		//default wvalue of anon
	}
	set name(val){
			this._name=Person.capitalizedword(val);
	}
	get name(){
			return this._name;
	}
	printGreeting(){
		console.log(`Hi i am ${this.name}!`);
	}
	static capitalizedword(word){
		return word[0].toUpperCase()+word.slice(1);
	}
}
class employe extends Person{

	constructor(name,job='homeless'){
		super(name);
		//this.job=typeof job ==='string'? job:"homeless";
		this.job=job;
	}
	// set job(val){
	// 	this._job=employe.capitalizedword(val);
	// }
	printGreeting(){
		console.log(`Hi i am ${this.name} and i am a ${this.job}`);
	}
	callsupermethod(){
		super.printGreeting();
	}

}

var person1 = new employe("andrew",'developer');

person1.printGreeting();
person1.callsupermethod();
var person2= new Person();
person2.printGreeting();


console.log(Person.capitalizedword('bruno'));