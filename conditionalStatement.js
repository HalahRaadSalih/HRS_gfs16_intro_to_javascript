
var someArry = [];

if (someArry.length >= 5){
	console.log('your reservation has been booked');
}

else{
	console.log('you need' + (5 - someArry.length) + 'of people to book a reservation');
}