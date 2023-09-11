const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'eb77b9204fmsh5799a5ed801d84bp19d802jsn841e27ed1cc1',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};
const weather_img = document.querySelector('.weather-img');
const getWeather=(city)=>{
	cityName.innerHTML=city;
fetch( 'https://weatherapi-com.p.rapidapi.com/current.json?q='+city,options)
    .then(Response=>Response.json())
    .then(Response=>{
		console.log(Response)
		    cloud_pct.innerHTML=Response.current.cloud
        temp.innerHTML=Response.current.temp_c
        feels_like.innerHTML=Response.current.feelslike_c
        humidity.innerHTML=Response.current.humidity
        wind_dir.innerHTML=Response.current.wind_dir
        pressure.innerHTML=Response.current.pressure_mb
        wind_speed.innerHTML=Response.current.wind_kph
        wind_degrees.innerHTML=Response.current.wind_degree
        condition.innerHTML=Response.current.condition.text
        weather_img.src=Response.current.condition.icon
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

