// const dataString = sessionStorage.getItem('selectedBrewery');

// if (dataString) {
//     const data = JSON.parse(dataString);
//     render(data);
// }

// const id = sessionStorage.getItem('selectedBrewery');

const queryParams = new URLSearchParams(window.location.search);

//window.location.search restituisce la parte della stringa dell'URL che rappresenta i parametri di query, inclusa la parte ? iniziale. 
//Ad esempio, se l'URL completo è https://www.example.com/page?id=123&name=John, window.location.search restituirà ?id=123&name=John.

// console.log(queryParams);

const id = queryParams.get('id'); //Questa riga utilizza il metodo .get() dell'oggetto queryParams per ottenere il valore del parametro di query chiamato 'id'.

if(id){  //Se il parametro 'id' è presente nell'URL, la variabile id conterrà il suo valore corrispondente.
    DBService.getSingleBrewery(id).then(brewery => render(brewery));
}

function render(brewery){
    
    const breweryContainer = document.getElementById('brewery-container');
    breweryContainer.appendChild(createElementWithString('span', brewery.name));
    breweryContainer.appendChild(createElementWithString('span', brewery.city));
    breweryContainer.appendChild(createElementWithString('span', brewery.state));
    breweryContainer.appendChild(createElementWithString('span', brewery.address_1));
    breweryContainer.appendChild(createElementWithString('span', brewery.brewery_type));
    breweryContainer.appendChild(createElementWithString('span', brewery.website_url));

}


// OPERAZIONI CRUD (create, read, update, delete)
// Verbi associati: create --> post, read --> get, update --> put, delete --> delete

