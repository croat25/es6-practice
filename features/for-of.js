var locations=[];
locations.push({
	name:"Oakville",
	weather:22
});

locations.push({
	name:"Toronto",
	weather:23
});

for(let location of locations){
	console.log(`${location.name} has a temperature of ${location.weather}`);
}


//exercise

function averagegrade(...grades){
	var total=0;
	var count=0;
	for (let grade of grades){
		total+=grade;
		count+=1;
	}
	return total/count;
}


var total=averagegrade(1,44,99);
console.log(total);