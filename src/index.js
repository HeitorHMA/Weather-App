import fetchLocationName from "./fetchLocationName";

const userSubmit = document.querySelector("#userSubmitButton");
userSubmit.addEventListener("click",function(){
   fetchLocationName();
});
