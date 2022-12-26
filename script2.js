let display = document.getElementById('note-display');
let input1 = document.getElementById('input');
input1.setAttribute('placeholder', 'type your note');
let add_note = document.getElementById('add_note');
let renderFunc = (xyz) => {

  
  if (input1.value != '') {
    let div1 = document.createElement('div');
    let div2 = document.createElement('div');
    div2.className = 'created_div2';

    let delete_button = document.createElement('button');
    let note = document.createElement('h3');
    note.innerText = input1.value;
    note.style.backgroundColor = 'white';

    delete_button.innerText = 'delete';
    let edit_button = document.createElement('button');
    edit_button.innerText = 'edit';
    display.appendChild(div1)
    div1.appendChild(div2);
    div2.appendChild(note)

  }   
};

add_note.addEventListener("click",renderFunc)



///main render function which render all localstorage array eleent





