// console.log("Calling showNotesCard");
showNotesCard();

let addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", (eventObject) => {
  let addTxt = document.getElementById("addTxt");
  if (addTxt.value == "") {
    window.alert("Can't add a blank note!!! Write something to add to the note.");
    return;
  }

  let localStorageNotes = localStorage.getItem("notes");

  let notesObj;
  if (localStorageNotes == null) {

    notesObj = [];
  }

  else {


    notesObj = JSON.parse(localStorageNotes);
  }

  notesObj.push(addTxt.value);

  localStorage.setItem('notes', JSON.stringify(notesObj));

  addTxt.value = '';

  showNotesCard();
  // console.log("shownoTES CALLED")


});

// showNotesCard function:_________________________________

function showNotesCard() {
  // console.log("showNotesCard function called1.")

  let localStorageNotes = localStorage.getItem("notes");
  // console.log(localStorageNotes);
  let notesObj;
  if (localStorageNotes == null) {

    notesObj = [];


  }

  else {


    notesObj = JSON.parse(localStorageNotes);
  }


  let notesCardHTML = ``;
  notesObj.forEach((element, index) => {

    notesCardHTML += `
    
    
    <!-- JavaScript Card Here. -->
    <div class="noteCard mx-2 my-2 card" style="width: 18rem;">
    <div class="card-body">
    <h5 class="card-title">Note ${index + 1}</h5>
    <p class="card-text">${element}</p>
    <button href="#" class="btn btn-primary" id="${index}" onclick = deltFunc(this.id) >Delete Note</button>
    </div>
    </div>
    
    `

  })

  document.getElementById("notes");

  if (notesObj.length == 0) {

    notes.innerHTML = `<b>Nothing to show! Add a new note to see.</b>`
    // console.log("showNotesCard function called2.")
  }

  else {
    notes.innerHTML = notesCardHTML;
    // console.log("showNotesCard function called3.")
  }
}

// Delet Function:_________________________________________

function deltFunc(index) {

  document.getElementById('index');

  let localStorageNotes = localStorage.getItem("notes");
  let notesObj;
  if (localStorageNotes == null) {

    notesObj = [];
  }

  else {


    notesObj = JSON.parse(localStorageNotes);
  }

  notesObj.splice(index, 1);

  localStorage.setItem('notes', JSON.stringify(notesObj));
  showNotesCard();



}



// Search functions:_______________________________________

// let searchTxt = document.getElementById('searchTxt');

// searchTxt.addEventListener('input', () => {
//   // console.log("input event fired.");

//   // console.log(searchTxt.value);

//   let localStorageNotes = localStorage.getItem("notes");
//   let notesObj;
//   if (localStorageNotes == null) {

//     notesObj = [];
//   }

//   else {


//     notesObj = JSON.parse(localStorageNotes);
//   }

//   // notesObj.forEach((element,index)=>{
//   //   console.log(element);
//   // })

//   notesCard = document.getElementById('noteCard');

//   console.log(notesCard)




// })


