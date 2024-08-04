

document.getElementById('getWeather').addEventListener('click', function() {
    const city = document.getElementById('city').value;
    const apiKey = '8fcf88e61677509421f680fe607b54a0';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                const weatherCity = data.name;
                const weatherDescription = data.weather[0].description;
                const weatherTemperature = data.main.temp;

                document.getElementById('weatherCity').textContent = weatherCity;
                document.getElementById('weatherDescription').textContent = `Description: ${weatherDescription}`;
                document.getElementById('weatherTemperature').textContent = `Temperature: ${weatherTemperature} °C`;
            } else {
                alert('City not found!');
            }
        })
        .catch(error => console.error('Error fetching the weather data:', error));
});
