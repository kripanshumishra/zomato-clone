let url = "https://developerfunnel.herokuapp.com/hotels?city="
const weatherurl = `http://api.openweathermap.org/data/2.5/forecast/daily?q=delhi&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`

let hotelurl;



function getCity() {
    // fetch(url)
    fetch(url)
        .then((res) => res.json())
        .then(data => {
            console.log('poo poo')
            let k = data.reduce((acc, curr) => {
                if (!acc.includes(curr.city_name)) {
                    acc.push(curr.city_name)
                }
                return acc
            },[])
            k.map(data=>{
              let element =  document.createElement('option')
              let text = document.createTextNode(data)
              element.appendChild(text)
              element.value=data.city
              document.getElementById('dropdown').appendChild(element)
              console.log(dropdown.length)
            })

        })
}
// console.log(getCity(),'this is ')
// getCity()







function getHotel(){
    let city_ID= document.getElementById('dropdown').value
    while(search.length>0){
        search.remove(0)
    }
    fetch(`${url}${city_ID}`)
    .then((responce)=>responce.json())
    .then(data=>{
        for(i=0;i<data.length;i++){
            let element = document.createElement('option')
            let text = document.createTextNode(`${data[i].name}  `)
            console.log(text)
            element.appendChild(text)
            document.getElementById('search').appendChild(element)
        }
    })
}

function getCoupon(){
    document.getElementById("body").classList.add('blur')
}

function closeDiv(task){
    task.target.parentElement.parentElement.remove()
    document.getElementById("body").classList.remove("blur")
    // console.log("sjhskl")
}

function weather(){
    fetch(weatherurl)
    .then(data=>data.json())
    .then(data=>{
        for(i=0;i<data.list.length;i++){
            document.getElementById('weather-container').innerHTML=`<img class='card-img-top qq' src='https://openweathermap.org/img/w/${data.list[i].weather[0].icon}.png' alt='weather'/> <div class='topTemp qq q'>${data.list[i].temp.day}°C</div>`
            
        }
    })
}
weather()