// pełny link do api http://api.openweathermap.org/data/2.5/weather?q=Warszawa&units=metric&lang=PL&country=PL&&appid=f2f53da342f2fb992714aa6ef9cbee13

let weather = {
  "apiKey": "f2f53da342f2fb992714aa6ef9cbee13",
  fetchWeather: function(city) {
    fetch(
      "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&lang=PL&country=PL&&appid=" + this.apiKey ,
    ).then((Response) => Response.json())
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function(data) {
    const {name} = data;
    const {icon, description} = data.weather[0];
    const {temp, humidity} = data.main;
    const {speed} = data.wind;
    console.log(name,icon,description,temp,humidity,speed)
    document.querySelector(".city").innerText = name;
    document.querySelector(".temp").innerText = "Temperatura: " + temp + "°C";
    document.querySelector(".humidity").innerText = "Wilgotność: " + humidity + "%";
    document.querySelector(".wind").innerText = "Wiatr: " + speed + " m/s";
  },
  search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
  }
};

document.querySelector(".search button").addEventListener("click", function () {
  weather.search();
})