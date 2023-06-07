let cityEl = document.getElementById("CityValues");

let butnEl = document.getElementById("btns");
let tempEl = document.getElementById("tempss");
tempEl.textContent="";

let humditiEl = document.getElementById("humid");
humditiEl.textContent="";

//for display everything 

let displayEl = document.getElementById("weathers");

//aading the d-none element 
displayEl.classList.add("weather");


//for weather icon Element 

let weatherIconEl = document.getElementById("weatherIcon");

let link = "https://api.openweathermap.org/data/2.5/weather?q=";
let keys = "&appid=b8290257b776d27525a0768a81d4b939&units=metric"


let displayCityEl = document.getElementById("city");

displayCityEl.textContent = cityEl.value;

let windEl = document.getElementById("winds");
windEl.textContent="";

//adding error msg element 

let errorEl = document.getElementById("erores");


butnEl.onclick = function(){
    
   
    
let cityName = (cityEl.value);

//adding alert for blank input value.
if(cityEl.value===""){
        alert("Please Enter the City Name");
        
       
    };
    
   
//Creating the Url after getting the data from user 

let url = link+cityName+keys;

console.log(url);
console.log(cityName);
console.log(displayCityEl);

let options = {
    method:"GET"
}
fetch(url,options)
.then(function(response){
    return response.json()
})
.then(function(jsonData){
  
    
    if(jsonData.cod==404){
        errorEl.classList.add("error")
        displayEl.classList.add("weather");
    }else{
        errorEl.textContent ="";
        displayEl.classList.add("weathers"); 
    console.log(jsonData)
    let {name} = jsonData;
    displayCityEl.textContent= name;
    let {main} = jsonData;
    tempEl.textContent = main.temp+" °C";
    humditiEl.textContent = main.humidity + "%";
    let {wind} = jsonData;
    windEl.textContent = wind.speed + "Km/h";


    // upding the data of weather icon 
if(jsonData.weather[0].main=="Clouds"){
    weatherIconEl.src = "Resources/clouds.png"
}else if(jsonData.weather[0].main=="Clear"){
    weatherIconEl.src = "Resources/clear.png"
}else if(jsonData.weather[0].main=="Rain"){
    weatherIconEl.src = "Resources/rain.png"
}else if(jsonData.weather[0].main=="Drizzle"){
    weatherIconEl.src = "Resources/drizzle.png"

}else if (jsonData.weather[0].main=="Haze"){

    weatherIconEl.src = "Resources/mist.png"
}
    }

})





};