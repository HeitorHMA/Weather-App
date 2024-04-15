export default function fetchWeather(){

fetch (`https://api.weatherapi.com/v1/current.json?key=58f97e0302ee40a28e5192754241504&q=London`,{mode: 'cors'})
.then(function(response){
    return response.json();
})
.then(function(response) {
    const locationName = response.location.name;
    console.log(locationName)
  });
}