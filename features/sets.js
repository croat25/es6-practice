// var chatrooms= new Set();
// //add 

// chatrooms.add('runners');
// chatrooms.add('bikers');

// //size

// console.log(chatrooms.size);

// //Has

// console.log(`Does the set have Runners: ${chatrooms.has("runners")}`);


// chatrooms.delete("bikers");
// console.log(chatrooms.size);



// chatrooms.add({name:"Bruno"});
// console.log([...chatrooms]);

// chatrooms.forEach(function(chat){
// 	console.log(`Found chat room: ${chat}`);
// });


//exercise

var movie= new Set();

function addmovie(movietitle){
	if(movie.has(movietitle)){
		console.log("error duplicate");
	}
	else{
		movie.add(movietitle);
		console.log(` the movie ${movietitle} has been added`);
		console.log(...movie);
	}
}

addmovie("a new hope");
addmovie("district 9");
addmovie("a new hope");
