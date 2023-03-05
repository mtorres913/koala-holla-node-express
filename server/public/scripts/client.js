console.log( 'js' );

let nameIn = document.querySelector('#name').value
let ageIn = document.querySelector('#ageIn').value
let genderIn = document.querySelector('#genderIn').value
let readyForTransferIn = document.querySelector('#readyForTransferIn').value
let notesIn = document.querySelector('#notesIn').value

function submitKoala(event){
event.preventDefault();
console.log('In submitKoala function');
let koalasForServer = {
  name: nameIn,
  age: ageIn,
  gender: genderIn,
  notes: notesIn,
};
axios.post('/koalas', koalasForServer).then((response) => {
  console.log(response);
  getKoalas();
  document.querySelector('#addKoala').reset()
}).catch((error) => {
  console.log(error);
  alert('Something went wrong.');
});

}
function getKoalas(){
  console.log( 'in getKoalas' );
  // axios call to server to get koalas
  
} // end getKoalas

function saveKoala(){
  console.log( 'in saveKoala' );
  // axios call to server to get koalas
 
}

getKoalas();
