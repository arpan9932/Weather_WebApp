const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'eb77b9204fmsh5799a5ed801d84bp19d802jsn841e27ed1cc1',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather=(city)=>{
	cityName.innerHTML=city;
fetch( 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city,options)
    .then(Response=>Response.json())
    .then(Response=>{
		console.log(Response)
		cloud_pct.innerHTML=Response.cloud_pct
        temp.innerHTML=Response.temp
        feels_like.innerHTML=Response.feels_like
        humidity.innerHTML=Response.humidity
        min_temp.innerHTML=Response.min_temp
        max_temp.innerHTML=Response.max_temp
        wind_speed.innerHTML=Response.wind_speed
        wind_degrees.innerHTML=Response.wind_degrees
	})
    .catch(err=>console.error(err))
}
submit.addEventListener("click",(e)=>{
	e.preventDefault(e)
	getWeather(city.value)
})

getWeather("city")

let a;
let hour,minutes;
setInterval(() => {
    a=new Date();
    hour=a.getHours();
    minutes=a.getMinutes();
  document.getElementById('hour').innerHTML=hour;
  document.getElementById('min').innerHTML=minutes;
}, 1000);

