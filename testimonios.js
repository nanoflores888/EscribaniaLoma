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

fetchFoto()
fetchFotoM()
