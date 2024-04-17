export default function fetchLocationInfo(){

    const userInput = document.querySelector("#userInput").value;

    fetch (`https://api.weatherapi.com/v1/current.json?key=58f97e0302ee40a28e5192754241504&q=${userInput}`,{mode: 'cors'})
    .then(function(response){
        return response.json();
    })
    .then(function(response) {
        const userWind = document.querySelector("#wind");
        userWind.innerHTML = `${response.location.name}, ${response.location.country}`;
      });

    fetch (`https://api.weatherapi.com/v1/current.json?key=58f97e0302ee40a28e5192754241504&q=${userInput}`,{mode: 'cors'})
    .then(function(response){
        return response.json();
    })
    .then(function(response) {
      const userLocationTime = document.querySelector("#userLocationTime");
      userLocationTime.innerHTML = `${response.location.localtime}`;
    })
  
    };