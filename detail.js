// const dataString = sessionStorage.getItem('selectedBrewery');

// if (dataString) {
//     const data = JSON.parse(dataString);
//     render(data);
// }

// const id = sessionStorage.getItem('selectedBrewery');

const queryParams = new URLSearchParams(window.location.search);

console.log(queryParams);

const id = queryParams.get('id');

if(id){
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

