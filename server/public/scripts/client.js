console.log('js');

let currentIndex = 6;
function submitKoala(event) {
  event.preventDefault();
  console.log('In submitKoala function');
  let nameIn = document.querySelector('#nameIn').value
  let ageIn = document.querySelector('#ageIn').value
  let genderIn = document.querySelector('#genderIn').value
  let readyForTransferIn = document.querySelector('#readyForTransferIn').value
  let notesIn = document.querySelector('#notesIn').value
  let koalasForServer = {
    id: currentIndex += 1,
    name: nameIn,
    gender: genderIn,
    age: ageIn,
    ready_to_transfer: readyForTransferIn,
    notes: notesIn,
  };
  axios.post('/koalas', koalasForServer).then((response) => {
    console.log(response);
    document.querySelector('#nameIn').value = ''
    document.querySelector('#ageIn').value = ''
    document.querySelector('#genderIn').value = ''
    document.querySelector('#readyForTransferIn').value = ''
    document.querySelector('#notesIn').value = ''
    getKoalas();
  }).catch((error) => {
    console.log(error);
    alert('Something went wrong.');
  });

}
function getKoalas() {
  console.log('in getKoalas');
  // axios call to server to get koalas
  axios.get('/koalas').then((response) => {
    console.log(response);
    let koalasFromServer = response.data;
    let viewKoalas = document.querySelector('#viewKoalas')
    // let lastIndex = temperatureTable.lastElementChild;
    // let tableData = Number(lastIndex.firstElementChild.innerHTML);
    viewKoalas.innerHTML = '';
    for (let koala of koalasFromServer) {
      viewKoalas.innerHTML += `
      <tr>
          <td>${koala.id}</td>
          <td>${koala.name}</td>
          <td>${koala.age}</td>
          <td>${koala.gender}</td>
          <td>${koala.ready_to_transfer}</td>
          <td>${koala.notes}</td>
          <td><button onClick="deleteButton(event)"> Delete </button> </td>
      </tr>
  `;

    } // end getKoalas
  }).catch((error) => {
    console.log(error);
    alert('Something went wrong.');
  }); // ALWAYS add .catch
}

function saveKoala() {
  console.log('in saveKoala');
  // axios call to server to get koalas

}

getKoalas();

