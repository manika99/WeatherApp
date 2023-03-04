const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'bc317b08f8mshe026350a421c15ap14c8cbjsnce19fe98d2d2',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));  