// Created by Graeme
// Created on: May 3
// JS functions for index.html


// This function tells the user what age category of movies they can see
'use strict';
function submit() {
	// Declares variable
	let userAge = document.getElementById('age').value
	
	// If statement for user age, what age category of movies they can see
	if (userAge == "") {
		// Nothing was inputted
		document.getElementById('rating').innerHTML = "You need to input your age";
	} else if (userAge >= 17) {
		//If user can see a R rated movie 
		document.getElementById('rating').innerHTML = "You can go see an R rated movie with no supervision";
	} else if (userAge >= 13) {
		//If user can see a PG-13 movie 
		document.getElementById('rating').innerHTML = "You can go see a PG-13 movie with no supervision";
	} else if (userAge >= 10) {
		//If user can see a PG or G movie 
		document.getElementById('rating').innerHTML = "You can go see an PG or a G movie with no supervision";
	} else if (userAge < 10 && userAge > 0) {
		//User needs supervision
		document.getElementById('rating').innerHTML = "You need supervision to watch any age category of movie";
	} else {
		//User age is too young
		document.getElementById('rating').innerHTML = "That's not a real age, you have to be older then 0";
	}
}