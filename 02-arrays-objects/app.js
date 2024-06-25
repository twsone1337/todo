const inputElement = document.getElementById('title')
const createBtn = document.getElementById('create')
const listElement = document.getElementById('list')

// const notes = ['записать блок про массивы', 'рассказать теорию объектов', 'kaka']

// function render() {
//     for (let note of notes) {
//         listElement.insertAdjacentHTML('beforeend', getNoteTemplate(note))
//     }
// }
// render()

// createBtn.onclick = function () {
//     if (inputElement.value.length === 0) {
// return
//     }
//     listElement.insertAdjacentHTML('beforeend', getNoteTemplate(inputElement.value)
        
//   )
//   inputElement.value = ''
// }

// function getNoteTemplate(title) {
// return `
// <li
//         class="list-group-item d-flex justify-content-between align-items-center"
//     >
//         <span>${title}</span>
//         <span>
//         <span class="btn btn-small btn-success">&check;</span>
//         <span class="btn btn-small btn-danger">&times;</span>
//         </span>
//     </li>
    
// `
// }

/*Object Theory


const person = {
    firstName: 'Serge',
    lastName: 'Twist',
    dateOfBirth: 1997,
    hasGirlfriend: false,
    languages: ['ru', 'en', 'fr'],
    getFullName: function() {
        console.log(person.firstName + ' ' + person.lastName)
    }
}
*/


const notes = [
    {
    title: 'записать блок про массивы',
    completed: false,
},
{
    title: 'рассказать теорию объектов',
    completed: true,
},
]
function render() {
  listElement.innerHTML = "";
  for (let i = 0; i < notes.length; i++) {
    listElement.insertAdjacentHTML("beforeend", getNoteTemplate(notes[i], i));
  }
}
render();

createBtn.onclick = function () {
  if (inputElement.value.length === 0) {
    return;
  }
  const newNote = {
    title: inputElement.value,
    completed: false,
  };
  notes.push(newNote);
  render();
  inputElement.value = "";
  // aoba
};

function getNoteTemplate(note, index) {
    return `
    <li
            class="list-group-item d-flex justify-content-between align-items-center"
        >
            <span class="${
                note.completed ? 'text-decoration-line-through' : ''
            }">${note.title}</span>
            <span>
            <span class="btn btn-small btn-${
                note.completed ? 'warning' : 'success'
            }" data-index="${index}">&check;</span>
            <span class="btn btn-small btn-danger">&times;</span>
            </span>
        </li>
        
    `
}    
