let display = document.getElementById('note-display');
let input1 = document.getElementById('input');
input1.setAttribute('placeholder', 'type your note');
let add_note = document.getElementById('add_note');
let renderFunc=() => {
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

    // append
    display.appendChild(div1);
    div1.appendChild(note);
    div1.appendChild(div2);

    div2.appendChild(delete_button);
    div2.appendChild(edit_button);
    //edit section
    let temp = true;
    edit_button.addEventListener('click', () => {
      if (temp) {
        // contenteditable="true"
        note.setAttribute('contenteditable', 'true');
        edit_button.innerText = 'done';
        note.style.backgroundColor = 'RGB(192,192,199)';
        temp = false;
      } else {
        note.setAttribute('contenteditable', 'false');
        edit_button.innerText = 'edit';
        temp = true;
        note.style.backgroundColor = 'white';
        if (note.innerHTML == '') {
          div1.remove();
        }
      }
    });

    ///////////////////////// edit section closed

    //////////delete section
    delete_button.addEventListener('click', () => {
      div1.remove();
    });
    /////////// delete section closed

    //value get clean after click on add note
    input1.value = '';
    ///
    input1.setAttribute('placeholder', 'type your note');
  } else {
    input1.setAttribute('placeholder', 'input field is empty');
  }
}
let note_value=input1.value;
let note_store_array=[]
add_note.addEventListener("click",()=>{
 if(localStorage.getItem==null){
   localStorage.setItem("note_array","[]")
 }
//  note_store_array.push(input1.value);

  var old_data=JSON.parse(localStorage.getItem("note_array"))
  old_data.push(input1.value);
  localStorage.setItem("note_")
  // temp=localStorage.getItem("note")+"$"
  console.log(note_value)
})
