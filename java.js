



function weatherFunc(cityId) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=b3d8abdc05c90d578b5efa802314719d&units=metric&lang=ua`)
    .then(function (resp) { return resp.json() })
    .then(function (data) {
        console.log(data);
        document.querySelector('.city-name').innerHTML = data.name;
        document.querySelector('.temperature').innerHTML = data.main.temp + '&#8451';
        document.querySelector('.feel-like').innerHTML = Math.round(data.main.feels_like) 
            + '&#8451';
        document.querySelector('.icon').src = 'http://openweathermap.org/img/wn/' + data.weather[0].icon + '@2x.png'
    })
    .catch(function () {
        
    })
}

let select = document.querySelector (' .city');
select.onchange = ()=>{
    weatherFunc(select.value);
}

weatherFunc(select.value);
