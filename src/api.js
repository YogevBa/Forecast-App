const API_KEY = '1n4Lejo9ZhmAYWMXavAiFi7ci17vU50v'

// uses the city code to get the current weather for that location
export const getWeather = async (id) => {
    const base = `http://dataservice.accuweather.com/currentconditions/v1/`;
    const query = `${id}?apikey=${API_KEY}`;
    const response = await fetch(base + query);
    const data = await response.json();
    return data ? data[0] : []
}


// gets the city code
export const getCity = async (city) => {
    const base = `http://dataservice.accuweather.com/locations/v1/cities/search`;
    const query = `?apikey=${API_KEY}&q=${city}`
    const response = await fetch(base + query);
    const data = await response.json()

    return (data ? data[0] : [])
}


// gets 5 days forecast of the location
export const weatherFiveDay = async (city) => {
    const base = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${city}`;
    const query = `?apikey=${API_KEY}`;
    const response = await fetch(base + query);
    const data = await response.json()
    return (data);
}

// gets location by query search
export const autoCompleteSearch = async (value) => {
    const base = `http://dataservice.accuweather.com/locations/v1/cities/autocomplete`;
    const query = `?apikey=${API_KEY}&q=${value}`;
    const response = await fetch(base + query);
    const data = await response.json()
    return (data ? data[0] : [])


}

