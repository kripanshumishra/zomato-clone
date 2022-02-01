let url = "https://developerfunnel.herokuapp.com/hotels?city="
let ur = "https://developerfunnel.herokuapp.com/hotels?_id="
let hotelurl;

// function getCity(){
//     fetch(url)
//     .then(res=>res.json())
//     .then(data =>{
//         for (let x of data ){
//             console.log(x)
//             let element = document.createElement('option')
//             let text = document.createTextNode(x._city_name)
//             console.log(text)
//             element.value=x._id
//             document.getElementById('dropdown').appendChild(element)
//         }
//     })
// }



function getCity(){
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        for(i=0;i<data.length;i++){
            let element = document.createElement('option')  
            let text = document.createTextNode(data[i].city_name) 
            element.appendChild(text) 
            element.value = data[i]._id 
            document.getElementById('dropdown').appendChild(element)
            /*<select>
                <option value="1">Delhi</option>
            </select>*/
        }
    })
}


function getHotel(){
    let city_ID= document.getElementById('dropdown').value
    while(search.length>0){
        search.remove(0)
    }
    fetch(`${ur}${city_ID}`)
    .then((responce)=>responce.json())
    .then(data=>{
        for(i=0;i<data.length;i++){
            let element = document.createElement('option')
            let text = document.createTextNode(`${data[i].name} | ${data[i].city_name} `)
            console.log(text)
            element.appendChild(text)
            document.getElementById('search').appendChild(element)
        }
    })
}