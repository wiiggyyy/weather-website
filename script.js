const apiKey = "ad007e950b024cf0e27015e1f8231292"
const fetchWeather = (city) => {
    fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + apiKey
    )
        .then((response) => response.json())
        .then((data) => displayWeather(data))
}

const displayWeather = (data) => {
    const { name } = data;
    const { icon , description } = data.weather[0];
    const { temp , humidity } = data.main;
    const { speed } = data.wind;
    console.log(name,icon,description,temp,humidity,speed)
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".temperature").innerText = temp + "°C";
    document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText = "Wind Speed: " + speed + " km/h";
    document.querySelector(".description").innerText = description;
    document.querySelector(".logo").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
    document.getElementById("logo").style.display = "block";
}

const search = () => {
    fetchWeather(document.querySelector(".search-bar").value);
}

fetchWeather("London");

