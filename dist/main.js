(()=>{"use strict";document.querySelector("#userSubmitButton").addEventListener("click",(function(){!function(){const e=document.querySelector("#userInput").value;fetch(`https://api.weatherapi.com/v1/current.json?key=58f97e0302ee40a28e5192754241504&q=${e}`,{mode:"cors"}).then((function(e){return e.json()})).then((function(e){document.querySelector("#userLocationPlace").innerHTML=`${e.location.name}, ${e.location.country}`})),fetch(`https://api.weatherapi.com/v1/current.json?key=58f97e0302ee40a28e5192754241504&q=${e}`,{mode:"cors"}).then((function(e){return e.json()})).then((function(e){document.querySelector("#userLocationTime").innerHTML=`${e.location.localtime}`}))}(),function(){const e=document.querySelector("#userInput").value;fetch(`https://api.weatherapi.com/v1/current.json?key=58f97e0302ee40a28e5192754241504&q=${e}`,{mode:"cors"}).then((function(e){return e.json()})).then((function(e){document.querySelector("#userCloudTemp").innerHTML=`${e.current.temp_c}°C`,console.log(e)})),fetch(`https://api.weatherapi.com/v1/current.json?key=58f97e0302ee40a28e5192754241504&q=${e}`,{mode:"cors"}).then((function(e){return e.json()})).then((function(e){const t=document.querySelector("#userCloudTemp"),n=document.createElement("img");n.src=`${e.current.condition.icon}`,n.classList.add("skyIcon"),t.appendChild(n),console.log(e.current.condition.icon)})),fetch(`https://api.weatherapi.com/v1/current.json?key=58f97e0302ee40a28e5192754241504&q=${e}`,{mode:"cors"}).then((function(e){return e.json()})).then((function(e){document.querySelector("#userCloudText").innerHTML=`${e.current.condition.text}`})),fetch(`https://api.weatherapi.com/v1/current.json?key=58f97e0302ee40a28e5192754241504&q=${e}`,{mode:"cors"}).then((function(e){return e.json()})).then((function(e){document.querySelector("#userFeelsLike").innerHTML=`Feels like ${e.current.feelslike_c}°C`,console.log(e.current.feelslike_c)}))}(),function(){const e=document.querySelector("#userInput").value;fetch(`https://api.weatherapi.com/v1/current.json?key=58f97e0302ee40a28e5192754241504&q=${e}`,{mode:"cors"}).then((function(e){return e.json()})).then((function(e){document.querySelector(".windTitle").textContent="Wind"})),fetch(`https://api.weatherapi.com/v1/current.json?key=58f97e0302ee40a28e5192754241504&q=${e}`,{mode:"cors"}).then((function(e){return e.json()})).then((function(e){document.querySelector(".windUser").textContent=`${e.current.wind_kph}Km/H`})),fetch(`https://api.weatherapi.com/v1/current.json?key=58f97e0302ee40a28e5192754241504&q=${e}`,{mode:"cors"}).then((function(e){return e.json()})).then((function(e){document.querySelector(".humidityTitle").textContent="Humidity"})),fetch(`https://api.weatherapi.com/v1/current.json?key=58f97e0302ee40a28e5192754241504&q=${e}`,{mode:"cors"}).then((function(e){return e.json()})).then((function(e){document.querySelector(".humidityUser").textContent=`${e.current.humidity}`})),fetch(`https://api.weatherapi.com/v1/current.json?key=58f97e0302ee40a28e5192754241504&q=${e}`,{mode:"cors"}).then((function(e){return e.json()})).then((function(e){document.querySelector(".gustTitle").textContent="Gust"})),fetch(`https://api.weatherapi.com/v1/current.json?key=58f97e0302ee40a28e5192754241504&q=${e}`,{mode:"cors"}).then((function(e){return e.json()})).then((function(e){document.querySelector(".gustUser").textContent=`${e.current.gust_kph} Km/H`,console.log(e.current.gust_kph)})),fetch(`https://api.weatherapi.com/v1/current.json?key=58f97e0302ee40a28e5192754241504&q=${e}`,{mode:"cors"}).then((function(e){return e.json()})).then((function(e){document.querySelector(".uvTitle").textContent="UV Index"})),fetch(`https://api.weatherapi.com/v1/current.json?key=58f97e0302ee40a28e5192754241504&q=${e}`,{mode:"cors"}).then((function(e){return e.json()})).then((function(e){document.querySelector(".uvUser").textContent=`${e.current.uv} `,console.log(e.current.uv)}))}()}))})();