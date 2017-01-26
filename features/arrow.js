var people=['Bruno','viva','ante'];

// people.forEach(function(name){
// 	console.log(name);
// });

// people.forEach((name)=>{
// 	console.log(`Welcome 
// ${name}`);

// });
//original function definiton
// function add(a,b){
// 	return a+b;

// }
//  name of function = (parameters) arrow function and then wat u wan it to do
// var add=(a,b) =>a+b;

// var add=(a,b)=>{return a+b;}

// console.log(add(3,9));


var person={

	name:'Bruno',
	likes:['movies','programming','runner'],
	generateGreeter:function(){
		var that=this;
		return function(){
			console.log(that.name);
		}
	},
	printlikes:function(){
		this.likes.forEach((like)=>{
			console.log(`${this.name} likes ${like}`);
		});
	}
};
// person.generateGreeter()();

person.printlikes();