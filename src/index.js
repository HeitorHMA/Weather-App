import fetchLocationName from "./fetchLocationName";
import fetchLocationTemp from "./fetchLocationTemp";

const userSubmit = document.querySelector("#userSubmitButton");
userSubmit.addEventListener("click",function(){
   fetchLocationName();
   fetchLocationTemp();
});
