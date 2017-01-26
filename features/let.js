 // let name = "Bruno";

 // console.log(name);


// var x=0;
// if(true){
// 	let x = 12; //let is for local use change this to var to see
// 	console.log(x);
// }
// console.log(x);



// for (var i =0; i<3;i++){
// 	console.log(`for loop: ${i}`);
// }
// console.log(i);
// for (let i =0; i<3;i++){
// 	console.log(`for loop: ${i}`);
// }
// console.log(i);

function gencallback(){
let name='bruno';
	return function(){
		console.log(`hello :${name}`);
	}
}

gencallback()();