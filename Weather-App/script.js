const apiKey = "951e49e5882cc5c6856747930683d2a8";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// q=mumbai&

let input = document.querySelector(".search-bar");

let temperature = document.querySelector(".temperature");

let cityName = document.querySelector(".city-name");

let percent = document.querySelector(".percent");

let speed = document.querySelector(".speed");

let inputImage = document.querySelector(".temperature-img");

let serachImg = document.querySelector(".search-img");


async function checkWeather(city) {
    // Fetching the details from the url and getting response in ReadableForm
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    // Converting response to json
    let data = await response.json();

    cityName.textContent = data.name;
    temperature.textContent = Math.round(data.main.temp) + "°c";
    percent.textContent = data.main.humidity + "%";
    speed.textContent = data.wind.speed + " km/h";

    let weatherCondition = data.weather[0].main;

    console.log(weatherCondition)

    if (weatherCondition == "Clouds") {
        inputImage.src = "Images/clouds.png";
    }
    else if (weatherCondition == "Clear") {
        inputImage.src = "Images/clear.png";
    }
    else if (weatherCondition == "Drizzle") {
        inputImage.src = "Images/drizzle.png";
    }
    else if (weatherCondition == "Mist") {
        inputImage.src = "Images/mist.png";
    }
    else if (weatherCondition == "Rain") {
        inputImage.src = "Images/rain.png";
    }
    else {
        inputImage.src = "Images/snow.png";
    }

}

serachImg.addEventListener("click", () => {
    checkWeather(input.value);
})

