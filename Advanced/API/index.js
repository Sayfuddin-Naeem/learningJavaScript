const apiKey = '49f50311eddf9c5483e719fb1820b5c7';

const searchForm = document.querySelector('.weather_search');
const searchInput = document.querySelector('.city_name');

const cityName = document.querySelector('.weather_city');
const dateTime = document.querySelector('.weather_date_time');
const w_forecast = document.querySelector('.weather_forecast');
const w_icon = document.querySelector('.weather_icon');
const w_temperature = document.querySelector('.weather_temperature');
const w_minTem = document.querySelector('.weather_min');
const w_maxTem = document.querySelector('.weather_max');

const w_feelsLike = document.querySelector('.weather_feelsLike');
const w_humidity = document.querySelector('.weather_humidity');
const w_wind = document.querySelector('.weather_wind');
const w_pressure = document.querySelector('.weather_pressure');

// To Get city's longitude latitude
const getCityLonLat = async (city) =>{
    const apiUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`;

    try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        //console.log(data);
        const {lat, lon} = data[0];

        return {lat, lon};

    } catch (error) {
        console.log('Error from getCityLonLat:',error);
    }
};

//console.log(getCityLonLat("Barishal"));

// To get City Name
const getCountryName = (code)=>{
    return (new Intl.DisplayNames(['en'], { type: "region" })).of(code);
};

// To get date and time
const getDateTime = (dt)=>{
    const curDate = new Date(dt * 1000);
    // console.log(curDate);

    const options = {
        weekday : 'long',
        year : 'numeric',
        month : 'long',
        day : 'numeric',
        hour : 'numeric',
        minute : 'numeric'
    };
    
    const formatter = new Intl.DateTimeFormat('bn-BD', options);
    // console.log(formatter);

    return formatter.format(curDate);
};

// get Weather Data
const getWeatherData = async (city)=>{
    const cityLatLon = await getCityLonLat(city);
    //console.log(cityLatLon);
    const latitude = cityLatLon.lat;
    const longitude = cityLatLon.lon;
    //console.log(latitude, longitude);
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;

    try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        
        const {main, name, weather, wind, sys, dt} = data;
        cityName.innerText = `${name}, ${getCountryName(sys.country)}`;
        dateTime.innerText = getDateTime(dt);
        w_forecast.textContent = weather[0].main;
        w_icon.innerHTML = `<img src="https://openweathermap.org/img/wn/${weather[0].icon}@2x.png" alt="Weather icon" />`;

        w_temperature.innerHTML = `${main.temp}&#176 C`;
        w_maxTem.innerHTML = `Max: ${main.temp_max.toFixed()}&#176 C`;
        w_minTem.innerHTML = `Min: ${main.temp_min.toFixed()}&#176 C`;

        w_feelsLike.innerHTML = `${main.feels_like.toFixed(2)}&#176 C`;
        w_humidity.innerHTML = `${main.humidity}%`;
        w_pressure.innerHTML = `${main.pressure} hPa`;
        w_wind.innerHTML = `${wind.speed} m/s`;


    } catch (error) {
        console.log('Error from getWeatherData:',error);
    }
};

searchForm.addEventListener('submit', function(e){
    e.preventDefault();
    let inputVal = searchInput.value;
    inputVal = inputVal.trim();
    if(inputVal){
        getWeatherData(inputVal);
    }
    searchInput.value = '';
    console.log(inputVal);
});

document.addEventListener('load', getWeatherData('Barishal'));