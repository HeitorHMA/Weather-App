export default function fetchLocationTemp(){

    const userInput = document.querySelector("#userInput").value;

    fetch (`https://api.weatherapi.com/v1/current.json?key=58f97e0302ee40a28e5192754241504&q=${userInput}`,{mode: 'cors'})
    .then(function(response){
        return response.json();
    })
    .then(function(response) {
        const userCloudTemp = document.querySelector("#userCloudTemp");
        userCloudTemp.innerHTML = `${response.current.temp_c}°C`
        console.log(response)
      });

    fetch (`https://api.weatherapi.com/v1/current.json?key=58f97e0302ee40a28e5192754241504&q=${userInput}`,{mode: 'cors'})
    .then(function(response){
        return response.json();
    })
    .then(function(response) {
        const userCloudTemp = document.querySelector("#userCloudTemp");
        const skyIcon = document.createElement("img");
        skyIcon.src = `${response.current.condition.icon}`;
        skyIcon.classList.add("skyIcon")
        userCloudTemp.appendChild(skyIcon);
        console.log(response.current.condition.icon)
      });

      fetch (`https://api.weatherapi.com/v1/current.json?key=58f97e0302ee40a28e5192754241504&q=${userInput}`,{mode: 'cors'})
    .then(function(response){
        return response.json();
    })
    .then(function(response) {
        const userCloudText = document.querySelector("#userCloudText");
        userCloudText.innerHTML = `${response.current.condition.text}`
      });

      fetch (`https://api.weatherapi.com/v1/current.json?key=58f97e0302ee40a28e5192754241504&q=${userInput}`,{mode: 'cors'})
    .then(function(response){
        return response.json();
    })
    .then(function(response) {
        const userFeelsLike = document.querySelector("#userFeelsLike");
        userFeelsLike.innerHTML = `Feels like ${response.current.feelslike_c}°C`
        console.log(response.current.feelslike_c)
      });

    }