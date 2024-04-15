export default function fetchLocationName(){

    fetch (`https://api.weatherapi.com/v1/current.json?key=58f97e0302ee40a28e5192754241504&q=London`,{mode: 'cors'})
    .then(function(response){
        return response.json();
    })
    .then(function(response) {
        const userLocationPlace = document.querySelector("#userLocationPlace");
        const userLocation = document.createElement("h1")
        userLocation.innerHTML = `${response.location.name},${response.location.country}`
        userLocationPlace.appendChild(userLocation)
        console.log(locationName)
      });
    }