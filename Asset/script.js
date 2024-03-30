//to store inputs user name
/*function saveUserprofile(){
    const name = document.getElementById('name').value;
    localStorage.setItems('submittedName', name);     
}
 

//retrieve user name from local storage
let submittedName = localStorage.getItem('submittedName');

//display user name on the page
const displayUserName = document.getElementById('userName');
displayUserName.textContent = 'Go set those milestones ' + submittedName + '!';

//form event

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('taskForm');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      if (validateForm()) {
        const nameInput = document.getElementById('name');
        const name = nameInput.value.trim();
        sessionStorage.setItem('name', name);
        this.submit();
      }
    });

//form validation

function taskValidation(){
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    let isValid = true;

    //Error Alert Messages
    errorName.innerHTML = '';
    errorEmail.innerHTML = '';

    //Validation of Name
    if(name === ''){
        setErrorFor(nameInput, 'Name cannot be empty');
        isValid = false;
    } else {
      setSuccessFor(nameInput);
    }

    //Validation of Email
    if (email === '') {
        setErrorFor(emailInput, 'Email cannot be empty');
        isValid = false;
      } else if (!isValidEmail(email)) {
        setErrorFor(emailInput, 'Email is not valid');
        isValid = false;
      } else {
        setSuccessFor(emailInput);
      }
      return isValid;
    }

    //enable and disenable button
    nextBtn.disabled = !isValid;

    //navigating to the next page
    if(isValid){
        window.location.href = 'taskApp.html';
    }
}

function validateEmailEntity(email) {
  let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}*/

  
 
//input functionality for the taskApp.html
//var tasks = JSON.parse(localStorage.getItems('tasks')) || [];
const inputField = document.getElementById('taskInputBox');
const listContainer =document.getElementById('listOfTask');


function displayTask(){
  //Display task List
  if(inputField.value === ''){
    alert("kindly write up your task")
  }
  else{
    let li = document.createElement('li');
    li.innerHTML = taskInputBox.value;
    listContainer.appendChild(li);

    //Edit delete image display
    let span = document.createElement('span');
    span.innerHTML = "\u00d7"
    li.appendChild(span);
  } 

  taskInputBox.value = '';
  storeTaskdata();

}

//effect for checked radio button image
listContainer.addEventListener("click", function(e){
  if(e.target.tagName === "LI"){
    e.target.classList.toggle("taskList");
    storeTaskdata();
  }
  else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove("taskList");
    storeTaskdata();
  }
}, false);

//for local storage of the created, completed and deleted task
function storeTaskdata(){
  localStorage.setItem("data", listContainer.innerHTML);
}

//refreshing the stored data
function displayStoredTask(){
  listContainer.innerHTML = localStorage.getItem("data");
}

displayStoredTask(); 
  




