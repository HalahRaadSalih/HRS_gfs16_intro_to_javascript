
var someArry = ['hala', 'lissa', 'hdhdvv', 'kjbejh', 'h3gy3gr3yg'];
var arrayLen = someArry.length;
var peopleToBook = 5;

if (arrayLen >= peopleToBook){
	console.log('your reservation has been booked');
}

else{
	var peopleNeededToBook = peopleToBook - arrayLen;
	console.log('you need ' + (peopleNeededToBook + 'of people to book a reservation');
}