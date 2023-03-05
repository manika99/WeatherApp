

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
}