/**
 * ! Selectors 
 * ? This is selecting the HTML Element
 */

let result = document.getElementById('result')

/**
 * ! Building The API
 */

let base = "https://api.openweathermap.org/data/2.5/weather"
let cityName
let units = "metric"
let password = "a56878e7d69281d3022d802228213557"
/**
*!  This will fetch me data from API
**/

let fetchData = async (e) => {
  cityName = e.value
  
  let api = `${base}?q=${cityName}&units=${units}&appid=${password}`
    await fetch(api)
    .then((res)=>{
        if(res.ok){
            result.innerHTML = "City Found"
            return res.json()
        }
        else{
            result.innerHTML = "City not Found"
            throw new Error("City Not Found")
        }
    })
    .then((res)=>template(res))
    .catch(err=>console.log(err))

}
// This will print the result in the Browser
let template = (res)=>{
    console.log(res)
    let {name, sys, main, weather, wind} = res
    return result.innerHTML = `
    <div class="fs-5 text-center">${name}, ${sys.country}</div>
    <div class="d-flex justify-content-center"><img src='http://openweathermap.org/img/wn/${weather[0].icon}@2x.png'/></div>
    <div>Description : ${weather[0].main}</div>
    <div>Temperature : ${main.temp} C</div>
    <div>Humidity : ${main.humidity}</div>
    <div>Pressure : ${main.pressure}</div>
    <div> Wind Speed :${wind.speed}</div>
    <div>Wind Degree : ${wind.deg}</div>
    `
}


  /**  
   *!  Asynchronous js 3 versions 
    */
  //  Version 1 Callbacks
  // Version 2 try catch
  // Version 3 is fetch

/**
 * ! Regular Function
 */

function abc(){}

// abc()

/**
 * ! es6 Function - single line - no curly brackets
 */

let bcd = () => console.log(' hey buddy')
// bcd()

/**
 * ! es6 Function - multi line - with curly brackets
 */
 let efg = () => { 
  console.log('Joy')
  console.log('Diran')
}
//  efg()