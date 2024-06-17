const personForm = document.getElementById("personForm");
const nameInput = document.getElementById("personName");
const ageInput = document.getElementById("personAge");
const addPersonBtn = document.getElementById("addPersonBtn");
const records = document.getElementById('records');

localStorage.clear()

// const people = JSON.parse(localStorage.getItem("people")) || [];
let people = JSON.parse(localStorage.getItem("people"));
if (!people) people = [];

personForm.addEventListener("submit", (e) => {
  e.preventDefault();
  //   return;
  const newPerson = {
    id: uuidv4(),
    name: nameInput.value,
    age: Number(ageInput.value),
  };

  people.push(newPerson);

  localStorage.setItem("people", JSON.stringify(people));
  console.log(people);

  const {
    id,
    name,
    age
  } = {... newPerson}
  // display new added record on index
  const newRecord = document.createElement('p');
  newRecord.textContent = `id: ${id}, name: ${name}, age: ${age}`;
  records.appendChild(newRecord);

  nameInput.value = '';
  ageInput.value = '';

});
