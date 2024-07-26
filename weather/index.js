var inputvalue = document.querySelector('#cityinput')
var btn = document.querySelector('#add')
var city = document.querySelector("#cityoutput")
var desc = document.querySelector('#description')
var temp = document.querySelector("#temp")
var wind = document.querySelector('#wind')
apik="42116835e994a190e58754f97fd99fef"
function convert(val)
{
    return (val -273).toFixed(3)
}

btn.addEventListener('click',function()
{
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputvalue.value +'&appid='+apik)

    .then(res => res.json())

    .then(data=> 
    {
        var nameval =data['name']
        var desc =data['weather']['0']['description']
        var temperature = data['main']['temp']
        var windspeed = data['wind']['speed']

        city.innerHTML=`Weather Of <span>${nameval}<span>`
        temp.innerHTML=`Temperature: <span>${convert(temperature)} C</span>`
        description.innerHTML = `Sky Conditions: <span>${desc}<span>`
        wind.innerHTML=`Wind Speed: <span>${windspeed} km/hr<span>`
    })
    .catch(err=> alert('you have entered wrong city name'))
})