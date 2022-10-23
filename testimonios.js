/*

function fetchFoto(){
    
    
        
    for (let elemento of document.getElementsByClassName("testimonio")) {
        fetch("https://xsgames.co/randomusers/avatar.php?g=female", { mode: 'no-cors', redirect: 'follow' } )    
        .then( (res) => {
            console.log(res);
            elemento.innerHTML = "<div> <img src='" + 	"https://xsgames.co/randomusers/assets/avatars/female/21.jpg" + "' alt=''></img></div><div>" + elemento.innerHTML +"</div>";
        })
            
    }
    

} 
*/
/*

function fetchFoto(){
    let n_testimonio = 20;
    for (let elemento of document.getElementsByClassName("testimonio")) {
        fetch("https://thispersondoesnotexist.com", {  redirect: 'follow' } )
        .then( (res) => {
            console.log(res);
            elemento.innerHTML = "<div> <img src='" + res + "' alt=''></img></div><div>" + elemento.innerHTML +"</div>";
        })
        n_testimonio ++;    
    }
    
    

} 
*/

function fetchFoto(){
    fetch('https://randomuser.me/api/?results=2&gender=female')
    .then( (res) =>  res.json() )
    .then((data) => {
        let n_testimonio = 0;
        for (let elemento of document.getElementsByClassName("testimonio")) {
            elemento.innerHTML = "<div> <img src='" + data.results[n_testimonio].picture.thumbnail+ "' alt='' class='circular'></img></div><div>" + elemento.innerHTML +"</div>";
            n_testimonio ++;
        }
    })
} 

function fetchFotoM(){
    fetch('https://randomuser.me/api/?results=7&gender=male')
    .then( (res) =>  res.json() )
    .then((data) => {
        let n_testimonio = 0;
        for (let elemento of document.getElementsByClassName("testimoniom")) {
            elemento.innerHTML = "<div> <img src='" + data.results[n_testimonio].picture.thumbnail+ "' alt='' class='circular'></img></div><div>" + elemento.innerHTML +"</div>";
            n_testimonio ++;
        }
    })
} 

/*
function fetchFoto(){
    fetch('http://jsonplaceholder.typicode.com/albums/1/photos')
    .then( (res) =>  res.json() )
    .then((data) => {
        let n_testimonio = 0;
        for (let elemento of document.getElementsByClassName("testimonio")) {
        
            elemento.innerHTML = "<div> <img src='" + data[n_testimonio].thumbnailUrl + "' alt=''></img></div><div>" + elemento.innerHTML +"</div>";
            n_testimonio ++;
        }
        return data;
    })

} 

*/
fetchFoto()
fetchFotoM()
