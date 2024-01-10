async function getQuotes(){
let apiUrl = "https://aminetrigithub.github.io/data.quote/data/data.json";
try{
     let response = await fetch(apiUrl)
     apiQuotes = await response.json()
     console.log(apiQuotes);
}catch(error){
   
}
}
getQuotes()