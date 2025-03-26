const apiKey = "f15ea561629e2dc7c08037829d88f4ff";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

searchBox = document.querySelector(".search input");
searchBtn = document.querySelector(".search button");
weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
     
    const data = await response.json();
    console.log(data);

    document.querySelector("#temp").innerHTML = Math.floor(data.main.temp) + "°C";
    document.querySelector("#city").innerHTML = data.name;
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " Kmph";

    if(data.weather[0].main === "Clouds"){
        weatherIcon.src = "https://cdn-icons-png.flaticon.com/128/414/414927.png";
    }
    else if(data.weather[0].main === "Clear"){
        weatherIcon.src = "https://cdn-icons-png.flaticon.com/128/7780/7780231.png";
    }
    else if(data.weather[0].main === "Rain"){
        weatherIcon.src = "https://cdn-icons-png.flaticon.com/128/8841/8841317.png";
    }
    else if(data.weather[0].main === "Drizzle"){
        weatherIcon.src = "https://cdn-icons-png.flaticon.com/128/6423/6423015.png";
    }
    else if(data.weather[0].main === "Mist"){
        weatherIcon.src = "https://cdn-icons-png.flaticon.com/128/2910/2910189.png";
    }
}

searchBtn.addEventListener("click",() => {
    checkWeather(searchBox.value);
    searchBox.value='';
})