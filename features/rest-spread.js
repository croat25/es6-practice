// function add(a,b){
// 	return a+b;
// }


// var numbers=[4,22];
// console.log(add(...numbers));
// console.log(add(1,4));

//-------------------spread
// var groupa=[33,99];
// var groupb=[11];
// var  unified=[0,...groupa,...groupb,100];

// unified.push(...[55,33]);
// console.log(unified);




//-------------rest params


// function greetusers(groups,...names){
// 	names.forEach(function(names){
// 		console.log(`Hello ${names}. your part of the ${groups}`);
// 	});
// }

// greetusers('developers','bruno','viva','ante');

//------------exercise

function add(base,...numbers){
	var total=0;
	numbers.forEach(function(names){
		console.log(base+names);
	});
	
}

add(3,5,7,1);