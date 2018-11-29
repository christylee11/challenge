// function to get weather data from OpenWeatherMap's Current weather data
// api: https://openweathermap.org/current
function findWeather() {
	var zipcode = document.getElementById('zip').value;
	var url = findURL(zipcode);
	
	// Create request variable and assign new XMLHttpRequest object to it
	var request = new XMLHttpRequest(); 

	// Open new connection
	request.open("GET", url, true);

	// If valid and ready, parse data to obtain weather info we want 
	// Display this weather data in the html file under the output paragraph
	request.onload = function() { 
		if (this.readyState == 4 && this.status == 200) {
			var data = JSON.parse(this.response);
			document.getElementById('output').innerHTML = "Place: " + data.name 
			+ "<br>" + "Temperature: " + data.main.temp + " degrees F" + "<br>" 
			+ "<br>" + "Minimum Temperature Today: " + data.main.temp_min 
			+ " degrees F" + "<br>" + "Maximum Temperature Today: " + 
			data.main.temp_max + " degrees F";
		}
	};
	request.send();
}

// function to create url string 
function findURL(zip) {
	var urlstart = "http://api.openweathermap.org/data/2.5/weather?zip=";
	var urlend = ",us&units=imperial&APPID=3a23736348167325a957ceb6df9a2c1d"; 
	return urlstart + zip + urlend; 
}

// clear boxes and say "Your message has been sent!"
// I did not actually program the sending of the message to anywhere!
function sendMessage() {
	document.getElementById('name').value="";
	document.getElementById('email').value="";
	document.getElementById('message').value="";
	document.getElementById('confirm').innerHTML="Your message has been sent!";
}