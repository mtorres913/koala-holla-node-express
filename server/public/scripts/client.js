console.log( 'js' );

let nameIn = document.querySelector('#name').value
let ageIn = document.querySelector('#ageIn').value
let genderIn = document.querySelector('#genderIn').value
let readyForTransferIn = document.querySelector('#readyForTransferIn').value
let notesIn = document.querySelector('#notesIn').value

function submitKoala(event)
let koalasForServer = {
  name: nameIn,
  age: ageIn,
  gender: genderIn,
  notes: notesIn,
};
function getKoalas(){
  console.log( 'in getKoalas' );
  // axios call to server to get koalas
  
} // end getKoalas

function saveKoala(){
  console.log( 'in saveKoala' );
  // axios call to server to get koalas
 
}

getKoalas();
