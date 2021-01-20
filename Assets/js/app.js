// Dom Manipulation and other code go here 
const cityForm = document.querySelector('.enter-city');
//elements to update main card and Forecasts Cards
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const forecasts = document.querySelector('.forecasts');

//graphic elements to be updated
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');
const iconUv = document.querySelector('.iconUv img');
const queryHistory = document.getElementById('queryHistory');

// working with the date
var DateTime = luxon.DateTime;
const today = new Date();

// init cities in list
function renderHistoryList() {
    const cities = getCitiesFromLocalStorage();

    for (let index = 0; index < cities.length; index++) {
        const p = document.createElement('p');
        const city = cities[index];
        p.setAttribute("type", "button")
        p.setAttribute("id", city)
        p.setAttribute("onClick", "reply_click(this.id)")
        p.classList.add("cityBtn")
        p.textContent = city;
        console.log(city);
        queryHistory.appendChild(p);
    }
}
renderHistoryList();


//func to update  UI
const updateUI = (data) => {
    // const cityDetails = data.cityDetails;
    // const weatherDetails = data.weatherDetails;
    // destructure properties
    const { cityDetails, weatherDetails, forecastDetails } = data;

    // function createWeatherCard(forecastDetail) {

    //     const card = document.createElement("div");
    //     const dateH3 = document.createElement("h3");
    //     dateH3.textContent = `Forecast: ${DateTime.fromSeconds(forecastDetails.DailyForecasts[0].EpochDate).toLocaleString({ month: 'short', day: 'numeric', year: 'numeric' })}`
    //     card.appendChild(dateH3);
    //     const cardBody = document.createElement("div");
    //     cardBody.classList.add("card-body")
    //     card.appendChild(cardBody);
    //     const p = document.createElement("p");
    //     p.classList.add("card-text");
    //     p.textContent = `
    //     MAX ${forecastDetail.DailyForecasts[0].Temperature.Maximum.Value} &deg;C
    //     <br>
    //     <div><img src="Assets/graphics/icons/${forecastDetail.DailyForecasts[0].Day.Icon}.svg"></div>
    //     <br>
    //     ${forecastDetail.DailyForecasts[0].Day.ShortPhrase}
    //     `
    //     cardBody.appendChild(p);
    //     const cardFooter = document.createElement("div");
    //     card.appendChild(cardFooter);
    //     const cardFooterImage = document.createElement("img");
    //     cardFooterImage.setAttribute("src", `Assets/graphics/icons/UV/${forecastDetails.DailyForecasts[0].AirAndPollen[5].CategoryValue}.svg`)
    //     cardFooter.appendChild(cardFooterImage);

    //     return card;

    // }

    const day1 = DateTime.fromSeconds(forecastDetails.DailyForecasts[0].EpochDate).toLocaleString({ month: 'short', day: 'numeric', year: 'numeric' });
    const day2 = DateTime.fromSeconds(forecastDetails.DailyForecasts[1].EpochDate).toLocaleString({ month: 'short', day: 'numeric', year: 'numeric' });
    const day3 = DateTime.fromSeconds(forecastDetails.DailyForecasts[2].EpochDate).toLocaleString({ month: 'short', day: 'numeric', year: 'numeric' });
    const day4 = DateTime.fromSeconds(forecastDetails.DailyForecasts[3].EpochDate).toLocaleString({ month: 'short', day: 'numeric', year: 'numeric' });
    const day5 = DateTime.fromSeconds(forecastDetails.DailyForecasts[4].EpochDate).toLocaleString({ month: 'short', day: 'numeric', year: 'numeric' });

    // update the details on the main card
    details.innerHTML =
        `
    <h5 class="my-3">${cityDetails.EnglishName}</h5>
    <div class="my-3">${weatherDetails.WeatherText}</div>
    <div class="display-4 my-4">
    <span>${weatherDetails.Temperature.Metric.Value}</span>
    <span>&deg;C</span>
    </div>
    <div class="my-3">HUMIDITY ${weatherDetails.RelativeHumidity}%</div>
    <div class="my-3">WIND SPEED ${weatherDetails.Wind.Speed.Metric.Value}km/h</div>
    `;

    //icon for weather conditions
    const iconSrc = `Assets/graphics/icons/${weatherDetails.WeatherIcon}.svg`;
    icon.setAttribute('src', iconSrc);
    //icon for UV Index
    const iconUvSrc = `Assets/graphics/icons/UV/${weatherDetails.UVIndex}.svg`;
    iconUv.setAttribute('src', iconUvSrc);
    // update the day  or night display  
    let timeSrc = weatherDetails.IsDayTime ? 'Assets/graphics/images/day.svg' : 'Assets/graphics/images/night.svg';
    time.setAttribute('src', timeSrc);

    // setting forecast items     
    forecasts.innerHTML = `
    <div class="card">
        <h3 class="card-header"> 5 Day Forecast </h3>
        <h5 class="card-header"> Forecast: ${day1} </h5>
        <div class="card-body">
            <p class="card-text">
                MAX ${forecastDetails.DailyForecasts[0].Temperature.Maximum.Value} &deg;C
                <br>
                <div><img src="Assets/graphics/icons/${forecastDetails.DailyForecasts[0].Day.Icon}.svg"></div>
                <br>
                ${forecastDetails.DailyForecasts[0].Day.ShortPhrase}
            </p>
        </div>
        <div class="card-footer">
            <div><img src="Assets/graphics/icons/UV/${forecastDetails.DailyForecasts[0].AirAndPollen[5].CategoryValue}.svg" class="smallIcon"></div>
        </div>
    </div>
    <div class="card">
        <h5 class="card-header"> Forecast: ${day2} </h5>
        <div class="card-body">
            <p class="card-text">
                MAX ${forecastDetails.DailyForecasts[1].Temperature.Maximum.Value} &deg;C
                <br>
                <div><img src="Assets/graphics/icons/${forecastDetails.DailyForecasts[1].Day.Icon}.svg"></div>
                <br>
                ${forecastDetails.DailyForecasts[1].Day.ShortPhrase}
            </p>
        </div>
        <div class="card-footer">
            <div><img src="Assets/graphics/icons/UV/${forecastDetails.DailyForecasts[1].AirAndPollen[5].CategoryValue}.svg" class="smallIcon"></div>
        </div>
    </div>
    <div class="card">
        <h5 class="card-header"> Forecast: ${day3} </h5>
        <div class="card-body">
            <p class="card-text">
                MAX ${forecastDetails.DailyForecasts[2].Temperature.Maximum.Value} &deg;C
                <br>
                <div><img src="Assets/graphics/icons/${forecastDetails.DailyForecasts[2].Day.Icon}.svg"></div>
                <br>
                ${forecastDetails.DailyForecasts[2].Day.ShortPhrase}
            </p>
        </div>
        <div class="card-footer">
            <div><img src="Assets/graphics/icons/UV/${forecastDetails.DailyForecasts[2].AirAndPollen[5].CategoryValue}.svg" class="smallIcon"></div>
        </div>
    </div>
    <div class="card">
        <h5 class="card-header"> Forecast: ${day4} </h5>
        <div class="card-body">
            <p class="card-text">
                MAX ${forecastDetails.DailyForecasts[3].Temperature.Maximum.Value} &deg;C
                <br>
                <div><img src="Assets/graphics/icons/${forecastDetails.DailyForecasts[3].Day.Icon}.svg"></div>
                <br>
                ${forecastDetails.DailyForecasts[3].Day.ShortPhrase}
            </p>
        </div>
        <div class="card-footer">
            <div><img src="Assets/graphics/icons/UV/${forecastDetails.DailyForecasts[3].AirAndPollen[5].CategoryValue}.svg" class="smallIcon"></div>
        </div>
    </div>
    <div class="card">
        <h5 class="card-header"> Forecast: ${day5} </h5>
        <div class="card-body">
            <p class="card-text">
                MAX ${forecastDetails.DailyForecasts[4].Temperature.Maximum.Value} &deg;C
                <br>
                <div><img src="Assets/graphics/icons/${forecastDetails.DailyForecasts[4].Day.Icon}.svg"></div>
                <br>
                ${forecastDetails.DailyForecasts[4].Day.ShortPhrase}
            </p>
        </div>
        <div class="card-footer">
        <div><img src="Assets/graphics/icons/UV/${forecastDetails.DailyForecasts[4].AirAndPollen[5].CategoryValue}.svg" class="smallIcon"></div>
    </div>
    `

    // forecasts.appendChild(createWeatherCard(forecastDetails[0]));


    // remove the class of d-none if it is present
    if (card.classList.contains('d-none')) {
        card.classList.remove('d-none');
    }
};

function getCitiesFromLocalStorage() {
    return JSON.parse(localStorage.getItem('cities')) || [];
}

const updateCity = async (city) => {

    const cityDetails = await getCity(city);
    const weatherDetails = await getWeather(cityDetails.Key);
    const forecastDetails = await getForecast(cityDetails.Key);
    return { cityDetails, weatherDetails, forecastDetails };

};

cityForm.addEventListener('submit', e => {
    // prevent detault action so it doesn't refresh page
    e.preventDefault();
    const cities = getCitiesFromLocalStorage();    // getting city value
    const city = cityForm.city.value.trim();
    cities.push(city)
    localStorage.setItem('cities', JSON.stringify(cities));
    // clear form
    cityForm.reset();
    //update the User Interface with the new City
    updateCity(city)
        .then(data => updateUI(data))
        // console.log(data[0])
        .catch(err => console.log(err));
});

function reply_click(clicked_id) {
    updateCity(clicked_id)
        .then(data => updateUI(data))
        .catch(err => console.log(err));
};