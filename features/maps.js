// var mymap= new Map();

// mymap.set('name','andrew');
// //get
// console.log(mymap.get('name'));

// //has
// mymap.set('age',25);
// console.log(mymap.has('age'));
// //delete
// mymap.delete('name');
// //size
// console.log(mymap.size);

// var user={name:'Bruno'};

// mymap.set(user,"Oakville");
// console.log(mymap.get(user));

// var user1= true;

// mymap.set(user1,"Oakville");
// console.log(mymap.get(user1));

// var mymap=new Map();

// mymap.set(1,"Bruno");
// mymap.set(2,"Viva");
// mymap.set(3,"Ben");

// console.log([...mymap]);

// console.log(mymap.keys())
// console.log(mymap.values())


////////////////////////

var location={
	name:"Oakville"
};

var secondlocation={name:"Toronto"};
var map=new Map();
function setweather(location,temp){
	map.set(location,temp);
}

function printweather(location){
	if(map.has(location)){
		console.log(`the temp of ${map.get(location)} is ${location.name}`);
	}
	else{
		console.log(`no weather recorded for ${location.name}!`);
	}
}


setweather(location,22);
printweather(location);


