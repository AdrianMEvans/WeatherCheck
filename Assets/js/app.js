// Dom Manipulation and other code go here 
const cityForm = document.querySelector('.enter-city');
//elements to update main card
const card = document.querySelector('.card');
const details = document.querySelector('.details');
//graphic elements to be updated
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');
const iconUv = document.querySelector('.iconUv img')

//func to update  UI
const updateUI = (data) => {
    // const cityDetails = data.cityDetails;
    // const weatherDetails = data.weatherDetails;
    
    // destructure properties
    const { cityDetails, weatherDetails } = data;
    
    // update the details on the card
    details.innerHTML = `
    <h5 class="my-3">${cityDetails.EnglishName}</h5>
    <div class="my-3">${weatherDetails.WeatherText}</div>
    <div class="display-4 my-4">
    <span>${weatherDetails.Temperature.Metric.Value}</span>
    <span>&deg;C</span>
    </div>
    <div class="my-3">HUMIDITY ${weatherDetails.RelativeHumidity}%</div>
    <div class="my-3">WIND SPEED ${weatherDetails.Wind.Speed.Metric.Value}km/h</div>
    `;
    
    //icon for wesather conditions
    const iconSrc = `Assets/graphics/icons/${weatherDetails.WeatherIcon}.svg`;
    icon.setAttribute('src', iconSrc);
    //icon for UV Index
    const iconUvSrc = `Assets/graphics/icons/UV/${weatherDetails.UVIndex}.svg`;
    iconUv.setAttribute('src', iconUvSrc);  
    // update the day  or night display  
    let timeSrc = weatherDetails.IsDayTime ? 'Assets/graphics/images/day.svg' : 'Assets/graphics/images/night.svg';
    time.setAttribute('src', timeSrc);

            
        // remove the class of d-none if it is present
        if(card.classList.contains('d-none')){
            card.classList.remove('d-none');
        }
};
        
        const updateCity = async (city) => {
            
            const cityDetails = await getCity(city);
            const weatherDetails = await getWeather(cityDetails.Key);
            const forecastDetails = await getForecast(cityDetails.Key)
            console.log(cityDetails, weatherDetails, forecastDetails);
            return { cityDetails, weatherDetails, forecastDetails };
            
        };
        
        cityForm.addEventListener('submit', e => {
            // prevent detault action so it doesn't refresh page
            e.preventDefault();
            
            // getting city value
            const city = cityForm.city.value.trim();
            // clear form
            cityForm.reset();
            
            //update the User Interface with the new City
            updateCity(city)
            .then(data => updateUI(data))
            // console.log(data[0])
            .catch(err => console.log(err));
        });