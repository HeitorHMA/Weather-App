export default function fetchLocationInfo(){

    const userInput = document.querySelector("#userInput").value;

    fetch (`https://api.weatherapi.com/v1/current.json?key=58f97e0302ee40a28e5192754241504&q=${userInput}`,{mode: 'cors'})
    .then(function(response){
        return response.json();
    })
    .then(function(response) {
        const windTitle = document.querySelector(".windTitle");
        windTitle.textContent = `Wind`;
      });

    fetch (`https://api.weatherapi.com/v1/current.json?key=58f97e0302ee40a28e5192754241504&q=${userInput}`,{mode: 'cors'})
    .then(function(response){
        return response.json();
    })
    .then(function(response) {
      const windUser = document.querySelector(".windUser");
      windUser.textContent = `${response.current.wind_kph}Km/H`;
    })

    fetch (`https://api.weatherapi.com/v1/current.json?key=58f97e0302ee40a28e5192754241504&q=${userInput}`,{mode: 'cors'})
    .then(function(response){
        return response.json();
    })
    .then(function(response) {
        const windTitle = document.querySelector(".humidityTitle");
        windTitle.textContent = `Humidity`;
      });

    fetch (`https://api.weatherapi.com/v1/current.json?key=58f97e0302ee40a28e5192754241504&q=${userInput}`,{mode: 'cors'})
    .then(function(response){
        return response.json();
    })
    .then(function(response) {
      const humidityUser = document.querySelector(".humidityUser");
      humidityUser.textContent = `${response.current.humidity}`;
    })

    fetch (`https://api.weatherapi.com/v1/current.json?key=58f97e0302ee40a28e5192754241504&q=${userInput}`,{mode: 'cors'})
    .then(function(response){
        return response.json();
    })
    .then(function(response) {
        const gustTitle = document.querySelector(".gustTitle");
        gustTitle.textContent = `Gust`;
      });

    fetch (`https://api.weatherapi.com/v1/current.json?key=58f97e0302ee40a28e5192754241504&q=${userInput}`,{mode: 'cors'})
    .then(function(response){
        return response.json();
    })
    .then(function(response) {
      const gustUser = document.querySelector(".gustUser");
      gustUser.textContent = `${response.current.gust_kph} Km/H`;
      console.log(response.current.gust_kph);
    })

    fetch (`https://api.weatherapi.com/v1/current.json?key=58f97e0302ee40a28e5192754241504&q=${userInput}`,{mode: 'cors'})
    .then(function(response){
        return response.json();
    })
    .then(function(response) {
        const uvTitle = document.querySelector(".uvTitle");
        uvTitle.textContent = `UV Index`;
      });

    fetch (`https://api.weatherapi.com/v1/current.json?key=58f97e0302ee40a28e5192754241504&q=${userInput}`,{mode: 'cors'})
    .then(function(response){
        return response.json();
    })
    .then(function(response) {
      const uvUser = document.querySelector(".uvUser");
      uvUser.textContent = `${response.current.uv} `;
      console.log(response.current.uv);
    })
  
    };