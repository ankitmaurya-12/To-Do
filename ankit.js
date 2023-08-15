// Getting all required elements

const inputField = document.querySelector(".input-field textarea");
const todoList = document.querySelector(".todolist");
const pendingNum = document.querySelector(".pending-tasks .pending-num");
const clearButton = document.querySelector(".clear-button");
      
// Output the selected elements for verification
// console.log(inputField, todoList, pendingNum, clearButton);


// we will call this function while adding , deleteing and checking-unchecking the task
function allTasks(){
    let tasks=document.querySelectorAll(".pending");
    // console.log(tasks);

    // if tasks lenght is 0 then pending text content will be no, if not then num value will be displayed
    pendingNum.textContent =tasks.length ===0? "no": tasks.length;


    let allLists = document.querySelectorAll(".list");
    if (allLists.length > 0) {
        todoList.style.marginTop = "25px";
        clearButton.style.pointerEvents ="auto";
    } else {
        todoList.style.marginTop = "0px";
        clearButton.style.pointerEvents ="no";
    }    
}


// add tasks while we put value in text area and press enter
inputField.addEventListener("keyup",(e)=>{

    let inputValue =inputField.value.trim();
    // console.log(inputValue);

    // if enter button is clicked and inputed value lenght is greater than 0.
    if (e.key==="Enter" && inputValue.length > 0 ) {
        console.log("valid")
        let liTag = `<li class="list pending" onclick="handleStatus(this)">
        <input type="checkbox" />
        <span class="task">${inputValue}</span>
        <i class="uil uil-trash note-bin" onclick="deleteTask(this)"></i>
    </li>`

    todoList.insertAdjacentHTML("beforeend",liTag); //inserting li tag inside list
    inputField.value = "";   //removing value from input field
    allTasks();
}
});


//checking and unckeking the checkbox while we click on the task
function handleStatus(e){
    const checkbox=e.querySelector("input");     //getting checkbox
    console.log(checkbox);
    checkbox.checked =checkbox.checked ? false : true;
    e.classList.toggle("pending")
    allTasks();
}

// deleating task while we click on the delete icon
function deleteTask(e){
    // console.log(e);
    e.parentElement.remove();
    // console.log(e.parentElement);
    allTasks();

}

// deleating all the tasks while we click on the clear button
clearButton.addEventListener("click",(e)=>{
    todoList.innerHTML=""
    allTasks();
})


//to chnage background color evertime it load
function changeBackground() {
    const backgroundImages = [
        "/img/p0.jpg",
        "/img/p1.jpg",
        "/img/p2.jpg",
        "/img/p3.jpg",
        "/img/p4.jpg",
        "/img/p5.jpg",
        "/img/p6.jpg",
        "/img/p7.jpg",
        "/img/p8.jpg",
        "/img/p9.jpg",
        "/img/p10.jpg",
        // Add more image URLs as needed
    ];    

    const randomIndex = Math.floor(Math.random() * backgroundImages.length);
    const selectedImage = backgroundImages[randomIndex];

    document.body.style.backgroundImage = `url('${selectedImage}')`;
}

// Call the function when the page loads
window.addEventListener("load", changeBackground);
