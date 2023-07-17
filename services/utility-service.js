// in questo file js si mettono tutte le funzioni che vogliamo usare in tutte le nostre pagine



function createElementWithString(elementName, contentString) {     // funzione factory per creare elementi e text node
    const element = document.createElement(elementName);
    const node = document.createTextNode(contentString);
    element.appendChild(node);
    return element;
}