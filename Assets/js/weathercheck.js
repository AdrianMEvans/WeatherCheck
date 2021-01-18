const key = 'pQ5vOr0AkzxHBiQAC0AFGGW1PvKfmUHa';

// function to get current weather information for city
const getWeather = async (cityKey) => {
  
    const base = 'https://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${cityKey}?apikey=${key}&details=true`;
  
    const response = await fetch(base + query);
    const data = await response.json();
    console.log(data[0]);
    return data[0];
    
  };
  
  //function to get 5 Day forecast for city
  const getForecast = async (cityKey) => {
    
    const base = 'https://dataservice.accuweather.com/forecasts/v1/daily/5day/';
    const query = `${cityKey}?apikey=${key}&details=true&metric=true`;
  
    const response = await fetch(base + query);
    const data = await response.json();
    console.log(data);
    return data;
    
  };
  // function to get id for city - set city as paramater  - to obtain weather data
  const getCity = async (city) => {
    
    const base = `https://dataservice.accuweather.com/locations/v1/cities/search?apikey=${key}&q=${city}`;
    // build query to get city id using API key and city input
    // const query = `?apikey=${key}&q=${city}`;
    // fetch resource (city id) and combine base and query together
    const response = await fetch(base);
    const data = await response.json();
    console.log(data[0]);
    return data[0];
  };