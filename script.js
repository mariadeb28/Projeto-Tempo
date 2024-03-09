


let key = "fd47aae6d98553f8a92d797edbcdcbf7"

function putOnScreen(data){
    console.log(data)

    document.querySelector(".cidade").innerHTML = "Weather in " + data.name
    document.querySelector(".temp").innerHTML = Math.floor(data.main.temp) + "°C"
    document.querySelector(".descricao").innerHTML = data.weather[0].description
    document.querySelector(".umidade").innerHTML = data.main.humidity + "%" + "Humidity"
    document.querySelector(".icone").src = "https://openweathermap.org/img/wn/" + data.weather[0].icon + ".png"
    
 
    

}


async function searchCity(cidade){

    let data = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cidade + "&appid=" + key + "&units=metric")
    .then(resposta => resposta.json())

   putOnScreen(data)

    
}



function cliqueiNoBotao(){
    let cidade = document.querySelector(".input-city").value

    searchCity(cidade)
}