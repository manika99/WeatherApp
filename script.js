

const searchCity = async () => {
	const city = document.getElementById('city-input').value; 
	console.log(city) 
	const data = await getWeather(city)
	showWeatherData(data)
}
 
const getWeather = (city) => {
	return fetch(
		`https://api.openweathermap.org/data/2.5/weather?q=${city}+&appid=cbe3dd267a18f6c89943b3eff94f1ed7&units=metric`
	  )
		.then((response) => response.json())
		.then((data) => data)
		.catch((err) => console.error(err));
}

const showWeatherData = (weatherData) => {
	console.log(weatherData)
	document.getElementById('temp').innerText = weatherData.main.temp
	document.getElementById('min-temp').innerText = weatherData.main.temp_min
	document.getElementById('max-temp').innerText = weatherData.main.temp_max
	document.getElementById('pressure').innerText = weatherData.main.pressure
	document.getElementById('humidity').innerText = weatherData.main.humidity
	document.getElementById('weather-type').innerText = weatherData.weather[0].main
}

// const weather = weatherData.weather[0].main;
// function setBackground(weather) {
// 	if (weather == "Clouds") {
// 	  body.background.setBackground = url("Clear.avif");
// 	} else if (weather == "Haze") {
// 	  background.src = "";
// 	} else if (weather == "Cloud") {
// 	  background.src = "";
// 	} else if (weather == "Smoke") {
// 	  background.src = "";
// 	} else if (weather == "Rain") {
// 	background.src = "";
//   }
//   }