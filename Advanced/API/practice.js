const apiKey = '49f50311eddf9c5483e719fb1820b5c7';


// To Get city's longitude latitude
const getCityLonLat = async (city) =>{
    const apiUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`;

    try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        const {lat, lon} = data;
        console.log({lat, lon});

        return {lat, lon};

    } catch (error) {
        console.log('Error from getCityLonLat:',error);
    }
};


const city = "Barishal";
    const cityLatLon = getCityLonLat(city);
    console.log(cityLatLon);