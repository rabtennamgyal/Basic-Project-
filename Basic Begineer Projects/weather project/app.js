const input = document.querySelector('.input');
const btn = document.querySelector('.btn');
const weather = document.querySelector('.weather');


const getData = async function() {
    if (weather.innerHTML === null) {
        const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=Imperial&appid=d5ec10c042b57a055f7d1864c9b86581`)
        .then(response => response.json());
        let currentWeather = data.weather[0].main;
        // check the current weather 
        if (currentWeather === 'Clouds') {
            let weatherData = document.createElement('div');
            weatherData.classList.add('weather-div');
            let temp = Math.ceil(data.main.temp);
            let wind = data.wind.speed;
            //const mph = +((2.23694 * mps).toFixed(2));
            weatherData.innerHTML = `
            <h1 class='the-style'>${data.weather[0].main} ⛅</h1>
            <h1 class='style'>${data.weather[0].description} 📝</h1>
            <h1 class='the-style'>${temp}°F 🌡️</h1>
            <h1 class='style'>Wind : ${wind} mph 🌬️</h1>
            <h1 class='the-style'>${data.name}, ${data.sys.country} 🗺️</h1>
            <h1 class='style'>Humidity : ${data.main.humidity}% 💧</h1>
            `
            weather.appendChild(weatherData);
            input.value = '';
        } else if (currentWeather === 'Clear') {
            let weatherData = document.createElement('div');
            weatherData.classList.add('weather-div');
            let temp = Math.ceil(data.main.temp);
            let wind = data.wind.speed;
            weatherData.innerHTML = `
            <h1 class='the-style'>${data.weather[0].main} ☀️</h1>
            <h1 class='style'>${data.weather[0].description} 📝</h1>
            <h1 class='the-style'>${temp}°F 🌡️</h1>
            <h1 class='style'>Wind : ${wind} mph 🌬️</h1>
            <h1 class='the-style'>${data.name}, ${data.sys.country} 🗺️</h1>
            <h1 class='style'>Humidity : ${data.main.humidity}% 💧</h1>
            `
            weather.appendChild(weatherData);
            input.value = '';
        } else if (currentWeather === 'Rain') {
            let weatherData = document.createElement('div');
            weatherData.classList.add('weather-div');
            let temp = Math.ceil(data.main.temp);
            let wind = data.wind.speed;
            weatherData.innerHTML = `
            <h1 class='the-style'>${data.weather[0].main} ⛈️ </h1>
            <h1 class='style'>${data.weather[0].description} 📝</h1>
            <h1 class='the-style'>${temp}°F 🌡️</h1>
            <h1 class='style'>Wind : ${wind} mph 🌬️</h1>
            <h1 class='the-style'>${data.name}, ${data.sys.country} 🗺️</h1>
            <h1 class='style'>Humidity : ${data.main.humidity}% 💧</h1>
            `
            weather.appendChild(weatherData);
            input.value = '';
        } else if (currentWeather === 'Snow') {
            let weatherData = document.createElement('div');
            weatherData.classList.add('weather-div');
            let temp = Math.ceil(data.main.temp);
            let wind = data.wind.speed;
            weatherData.innerHTML = `
            <h1 class='the-style'>${data.weather[0].main} ❄️</h1>
            <h1 class='style'>${data.weather[0].description} 📝</h1>
            <h1 class='the-style'>${temp}°F 🌡️</h1>
            <h1 class='style'>Wind : ${wind} mph 🌬️</h1>
            <h1 class='the-style'>${data.name}, ${data.sys.country} 🗺️</h1>
            <h1 class='style'>Humidity : ${data.main.humidity}% 💧</h1>
            `
            weather.appendChild(weatherData);
            input.value = '';
        } else if (currentWeather === 'Haze' || currentWeather === 'Mist') {
            let weatherData = document.createElement('div');
            weatherData.classList.add('weather-div');
            let temp = Math.ceil(data.main.temp);
            let wind = data.wind.speed;
            weatherData.innerHTML = `
            <h1 class='the-style'>${data.weather[0].main} 🌫️</h1>
            <h1 class='style'>${data.weather[0].description} 📝</h1>
            <h1 class='the-style'>${temp}°F 🌡️</h1>
            <h1 class='style'>Wind : ${wind} mph 🌬️</h1>
            <h1 class='the-style'>${data.name}, ${data.sys.country} 🗺️</h1>
            <h1 class='style'>Humidity : ${data.main.humidity}% 💧</h1>
            `
            weather.appendChild(weatherData);
            input.value = '';
        } else if (currentWeather === 'Dust') {
            let weatherData = document.createElement('div');
            weatherData.classList.add('weather-div');
            let temp = Math.ceil(data.main.temp);
            let wind = data.wind.speed;
            weatherData.innerHTML = `
            <h1 class='the-style'>${data.weather[0].main} 💨</h1>
            <h1 class='style'>${data.weather[0].description} 📝</h1>
            <h1 class='the-style'>${temp}°F 🌡️</h1>
            <h1 class='style'>Wind : ${wind} mph 🌬️</h1>
            <h1 class='the-style'>${data.name}, ${data.sys.country} 🗺️</h1>
            <h1 class='style'>Humidity : ${data.main.humidity}% 💧</h1>
            `
            weather.appendChild(weatherData);
            input.value = '';
        } else if (currentWeather === 'Drizzle') {
            let weatherData = document.createElement('div');
            weatherData.classList.add('weather-div');
            let temp = Math.ceil(data.main.temp);
            let wind = data.wind.speed;
            //const mph = +((2.23694 * mps).toFixed(2));
            weatherData.innerHTML = `
            <h1 class='the-style'>${data.weather[0].main} 🌧️</h1>
            <h1 class='style'>${data.weather[0].description} 📝</h1>
            <h1 class='the-style'>${temp}°F 🌡️</h1>
            <h1 class='style'>Wind : ${wind} mph 🌬️</h1>
            <h1 class='the-style'>${data.name}, ${data.sys.country} 🗺️</h1>
            <h1 class='style'>Humidity : ${data.main.humidity}% 💧</h1>
            `
            weather.appendChild(weatherData);
            input.value = '';
        }
    } 
    
    // Just 
    
    else {
        // removes already present data in the div
        weather.removeChild(weather.childNodes[0]);

        const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=Imperial&appid=d5ec10c042b57a055f7d1864c9b86581`)
        .then(response => response.json());
        let currentWeather = data.weather[0].main;
        // check the current weather 
        if (currentWeather === 'Clouds') {
            let weatherData = document.createElement('div');
            weatherData.classList.add('weather-div');
            let temp = Math.ceil(data.main.temp);
            let wind = data.wind.speed;
            weatherData.innerHTML = `
            <h1 class='the-style'>${data.weather[0].main} ⛅</h1>
            <h1 class='style'>${data.weather[0].description} 📝</h1>
            <h1 class='the-style'>${temp}°F 🌡️</h1>
            <h1 class='style'>Wind : ${wind} mph 🌬️</h1>
            <h1 class='the-style'>${data.name}, ${data.sys.country} 🗺️</h1>
            <h1 class='style'>Humidity : ${data.main.humidity}% 💧</h1>
            `
            weather.appendChild(weatherData);
            input.value = '';
        } else if (currentWeather === 'Clear') {
            let weatherData = document.createElement('div');
            weatherData.classList.add('weather-div');
            let temp = Math.ceil(data.main.temp);
            let wind = data.wind.speed;
            weatherData.innerHTML = `
            <h1 class='the-style'>${data.weather[0].main} ☀️</h1>
            <h1 class='style'>${data.weather[0].description} 📝</h1>
            <h1 class='the-style'>${temp}°F 🌡️</h1>
            <h1 class='style'>Wind : ${wind} mph 🌬️</h1>
            <h1 class='the-style'>${data.name}, ${data.sys.country} 🗺️</h1>
            <h1 class='style'>Humidity : ${data.main.humidity}% 💧</h1>
            `
            weather.appendChild(weatherData);
            input.value = '';
        } else if (currentWeather === 'Rain') {
            let weatherData = document.createElement('div');
            weatherData.classList.add('weather-div');
            let temp = Math.ceil(data.main.temp);
            let wind = data.wind.speed;
            weatherData.innerHTML = `
            <h1 class='the-style'>${data.weather[0].main} ⛈️</h1>
            <h1 class='style'>${data.weather[0].description} 📝</h1>
            <h1 class='the-style'>${temp}°F 🌡️</h1>
            <h1 class='style'>Wind : ${wind} mph 🌬️</h1>
            <h1 class='the-style'>${data.name}, ${data.sys.country} 🗺️</h1>
            <h1 class='style'>Humidity : ${data.main.humidity}% 💧</h1>
            `
            weather.appendChild(weatherData);
            input.value = '';
        } else if (currentWeather === 'Snow') {
            let weatherData = document.createElement('div');
            weatherData.classList.add('weather-div');
            let temp = Math.ceil(data.main.temp);
            let wind = data.wind.speed;
            weatherData.innerHTML = `
            <h1 class='the-style'>${data.weather[0].main} ❄️</h1>
            <h1 class='style'>${data.weather[0].description} 📝</h1>
            <h1 class='the-style'>${temp}°F 🌡️</h1>
            <h1 class='style'>Wind : ${wind} mph 🌬️</h1>
            <h1 class='the-style'>${data.name}, ${data.sys.country} 🗺️</h1>
            <h1 class='style'>Humidity : ${data.main.humidity}% 💧</h1>
            `
            weather.appendChild(weatherData);
            input.value = '';
        } else if (currentWeather === 'Haze' || currentWeather === 'Mist') {
            let weatherData = document.createElement('div');
            weatherData.classList.add('weather-div');
            let temp = Math.ceil(data.main.temp);
            let wind = data.wind.speed;
            weatherData.innerHTML = `
            <h1 class='the-style'>${data.weather[0].main} 🌫️</h1>
            <h1 class='style'>${data.weather[0].description} 📝</h1>
            <h1 class='the-style'>${temp}°F 🌡️</h1>
            <h1 class='style'>Wind : ${wind} mph 🌬️</h1>
            <h1 class='the-style'>${data.name}, ${data.sys.country} 🗺️</h1>
            <h1 class='style'>Humidity : ${data.main.humidity}% 💧</h1>
            `
            weather.appendChild(weatherData);
            input.value = '';
        }  else if (currentWeather === 'Dust') {
            let weatherData = document.createElement('div');
            weatherData.classList.add('weather-div');
            let temp = Math.ceil(data.main.temp);
            let wind = data.wind.speed;
            weatherData.innerHTML = `
            <h1 class='the-style'>${data.weather[0].main} 💨</h1>
            <h1 class='style'>${data.weather[0].description} 📝</h1>
            <h1 class='the-style'>${temp}°F 🌡️</h1>
            <h1 class='style'>Wind : ${wind} mph 🌬️</h1>
            <h1 class='the-style'>${data.name}, ${data.sys.country} 🗺️</h1>
            <h1 class='style'>Humidity : ${data.main.humidity}% 💧</h1>
            `
            weather.appendChild(weatherData);
            input.value = '';
        }   else if (currentWeather === 'Drizzle') {
            let weatherData = document.createElement('div');
            weatherData.classList.add('weather-div');
            let temp = Math.ceil(data.main.temp);
            let wind = data.wind.speed;
            //const mph = +((2.23694 * mps).toFixed(2));
            weatherData.innerHTML = `
            <h1 class='the-style'>${data.weather[0].main} 🌧️</h1>
            <h1 class='style'>${data.weather[0].description} 📝</h1>
            <h1 class='the-style'>${temp}°F 🌡️</h1>
            <h1 class='style'>Wind : ${wind} mph 🌬️</h1>
            <h1 class='the-style'>${data.name}, ${data.sys.country} 🗺️</h1>
            <h1 class='style'>Humidity : ${data.main.humidity}% 💧</h1>
            `
            weather.appendChild(weatherData);
            input.value = '';
        }
    } 
};


btn.addEventListener('click', () => {
    if (input.value === '') {
        return;
    } else {
        getData();
    }
});

input.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        if (input.value === '') {
            return;
        } else {
            getData();
        }
    } else {
        return;
    }
});