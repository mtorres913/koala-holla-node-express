console.log( 'js' );

let nameIn = document.querySelector('#nameIn').value
let ageIn = document.querySelector('#ageIn').value
let genderIn = document.querySelector('#genderIn').value
let readyForTransferIn = document.querySelector('#readyForTransferIn').value
let notesIn = document.querySelector('#notesIn').value
let currentIndex = 2;

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
  document.querySelector('#nameIn').value = ''
  document.querySelector('#ageIn').value = ''
  document.querySelector('#genderIn').value = ''
  document.querySelector('#readyForTransferIn').value = ''
  document.querySelector('#notesIn').value = ''
}).catch((error) => {
  console.log(error);
  alert('Something went wrong.');
});

}
function getKoalas(){
  console.log( 'in getKoalas' );
  // axios call to server to get koalas
  axios.get('/koalas').then((response) => {
  console.log(response);
  let koalasFromServer = response.data;
  let viewKoalas = document.querySelector('#viewKoalas');
  // let lastIndex = temperatureTable.lastElementChild;
  // let tableData = Number(lastIndex.firstElementChild.innerHTML);
  viewKoalas.innerHTML = '';
  let i = 0;
  for(let koala of koalasFromServer) {
  viewKoalas.innerHTML += `
      <tr>
          <td>${currentIndex}</td>
          <td>${koala.tempVal}</td>
          <td>${koala.humidVal}</td>
          <td>${koala.windVal}</td>
          <td>${koala.dateVal}</td>
          <td><button onClick="deleteButton(event)"> Delete </button> </td>
      </tr>
  `;
} // end getKoalas

function saveKoala(){
  console.log( 'in saveKoala' );
  // axios call to server to get koalas
 
}

getKoalas();
