export default function fetchLocationName(){

    const userInput = document.querySelector("#userInput").value;
    console.log(userInput);

    fetch (`https://api.weatherapi.com/v1/current.json?key=58f97e0302ee40a28e5192754241504&q=${userInput}`,{mode: 'cors'})
    .then(function(response){
        return response.json();
    })
    .then(function(response) {
        const userLocationTemp = document.querySelector("#userLocationTemp");
        userLocationTemp.innerHTML = `${response.location.name},${response.location.country}`
        console.log(response)
      });
    }