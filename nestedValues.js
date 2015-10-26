var users = [];

for(var i = 0; i <= 5; i++){
	var user = {
		firstName: "Halah" + i,
		lastName: "Salih" + i,
	};

	user.parents= [];

	user.parents.push('jane');
	user.parents.push('smith');

	users.push(user);
}