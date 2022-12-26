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
    note.innerText = 'ok';
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
};

let note_value = input1.value;
let note_store_array = [];


///main render function which render all localstorage array eleent


















///////////////////function section\\\\\\\\\\\\\\\\\\\\\\\\\\\
// 3.string to array and remove first char then array to string/ status - working
let Remove_first_char=(data1)=>{
  let str=data1
  let arr3=[...str]
  arr3.shift()
  let data = arr3.join("")
  console.log(data)
  return data;
  
}
// 1.fuction use for edit button will modify local storage
const edit_Localstorage_array_element = (arg_data, arg_id, key) => {
  //this arg_data is assing data at arg_id index
  let elemet1 = JSON.parse(localStorage.getItem(key));
  let final_id= Remove_first_char(arg_id);//worked fine
  elemet1[final_id] = arg_data;
  let afterEdit_into_stringfy = JSON.stringify(elemet1);
  localStorage.setItem(key, afterEdit_into_stringfy);
  console.log(elemet1, afterEdit_into_stringfy[10]);
};
// edit_Localstorage_array_element("edfghj","e2","note_array")
// console.log(JSON.parse(localStorage.getItem("note_array")));
//1. closed

 





//2. delete function that delete elemnt in array of local storage
const delete_Localstorage_array_element = (arg_id, key) => {
  //this arg_data is assing data at arg_id index
  let elemet1 = JSON.parse(localStorage.getItem(key));



 let final_id= Remove_first_char(arg_id);//worked fine

elemet1[final_id]="";
let deletd_item=elemet1
  let after_delete_into_stringfy = JSON.stringify(elemet1);
  localStorage.setItem(key, after_delete_into_stringfy);
  console.log(elemet1, after_delete_into_stringfy[10],"inside ");
  return deletd_item;
};
// console.log(delete_Localstorage_array_element("04","note_array"))



//2. dlete  is closed


let renderFunc2 = (arg1, arg2) => {
  // let div2 = document.createElement('div');
  // let note = document.createElement('h3');
  // display.appendChild(note);
  // note.innerText=arg1
  // note-
  // arg2-is for input value or note that is stored
  // arg2-is for index of array

  if (true) {
    let div1 = document.createElement('div');
    let div2 = document.createElement('div');
    div2.className = 'created_div2';

    let delete_button = document.createElement('button');
    let note = document.createElement('h3');
    note.innerText = arg1;
    note.style.backgroundColor = 'white';

    delete_button.innerText = 'delete';
    let edit_button = document.createElement('button');
    edit_button.innerText = 'edit';
    /////////////////////////////////// adding id in note-data respective to the index of the array in localstorage (edit in code id=123)
    delete_button.id = 'd' + arg2; //d for edit and arg2 will assing index of array that strore in local storage

    edit_button.id = 'e' + arg2; //e for edit and arg2 will assing index of array that strore in local storage
    // concept- that i use >>since note text that store in local storage print by sequence of array ,so index of array and note-text will be same
    // so by use this i can target the delet or edit in loclstorage array

    // append
    display.appendChild(div1);
    div1.appendChild(note);
    div1.appendChild(div2);

    div2.appendChild(delete_button);
    div2.appendChild(edit_button);
    //edit section
    //edit section
    let temp = true;
    edit_button.addEventListener('click', (e) => {
      if (temp) {
        // console.log(e.target); //edit code id=123 // status- working

        // contenteditable="true"
        note.setAttribute('contenteditable', 'true');
        edit_button.innerText = 'done';
        note.style.backgroundColor = 'RGB(192,192,199)';
        temp = false;
        // edit code id=123
        let key2 = 'note_array';

        let targetButton_id = e.target.id; //targeting id of the cliked edit button
        // edit_Localstorage_array_element=(arg_data=data that ,arg_id,key)
      } else {
        //eternal function
        edit_Localstorage_array_element(
          note.innerText,
          e.target.id,
          'note_array'
        );
           //
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
    delete_button.addEventListener('click', (e) => {
    
      delete_Localstorage_array_element(e.target.id,"note_array")

      console.log(e.target.id)
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
};












//////// local storege data adding and element adding
add_note.addEventListener('click', () => {
  if (localStorage.getItem('note_array') == null) {
    localStorage.setItem('note_array', '[]');
  }

  //  note_store_array.push(input1.value);
  let key1 = 'note_array';
  var old_data = JSON.parse(localStorage.getItem('note_array'));
  old_data.push(input1.value);
  localStorage.setItem('note_array', JSON.stringify(old_data));
  // temp=localStorage.getItem("note")+"$"
  console.log(note_value);
////////////////-----------------------------------------------------
  let data_in_localstorage = JSON.parse(localStorage.getItem('note_array'));
console.log(data_in_localstorage + 'h1');
let arr = [1, 2, 3, 4, 5];
// renderFunc2 to render the all data in localstorage("hooffffr")
renderFunc2(data_in_localstorage[data_in_localstorage.length-1],data_in_localstorage.length-1)
console.log(data_in_localstorage[data_in_localstorage.length-1],data_in_localstorage.length-1)
});

//  let tem2=data_in_localstorage.map((index)=>{renderFunc(index)})

////////////////////////////////////////////////////////////////////////////////////////////////////

let data_in_localstorage = JSON.parse(localStorage.getItem('note_array'));
console.log(data_in_localstorage + 'h1');
let arr = [1, 2, 3, 4, 5];
// renderFunc2 to render the all data in localstorage("hooffffr")

//edit code id=124;filtering empty string elemnt to not render
// reason because dection function will not delete but just assign empty string into localstorage empty element;
data_in_localstorage.map((a, index) => {
  if(a!=""){
// let temp=index-1//modify 125
    renderFunc2(a, index);
  }
   
  
 
});
//////////////////  eperiment section  \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//1 checki is string workin as array inde //status-working
// let str1="hello"
// console.log(str1[1]) // checki is string workin as array inde //status-working

// 2 array element deleting//status - sucess
// let arr2=[1,2,3,4];

// let i=1
// arr2.splice(i,1)
// // i mean which index will be delete
// // argument 2nd=1 mean how many index after i will be delete
// console.log(arr2)

//@ 3 using shift in string // not worked
// let arr2=[1,2,3,4];
// let str1="hello"
// str1.shift()
// console.log(str1)
// arr2.shift()
// console.log(arr2)

//@ 4 string to array and remove first char then array to string/ status - working
// let str2="hello2"
// let arr3=[...str2]
// arr3.shift()
// let data = arr3.join("")
// console.log(data)
