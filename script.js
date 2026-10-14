//Variables
const inputField = document.querySelector("input");
const submitBtn = document.querySelector(".submit");
const taskList = document.querySelector("ul");
const clearAllBtn = document.querySelector(".clearall");


//Logic
const clearAllTasks = () => {
    console.log("Check....");
    taskList.innerHTML = "";
    inputField.value = "";
};


const addTask = () => {
    let task = inputField.value.trim();

    if (task === "") {
        alert("Please enter a task!");
        return;
    }

    let newItem = document.createElement("li");

    newItem.innerHTML = `
                        <p>${task}</p>
                        <div>
                            <button class = 'check'>
                                <i class="fa-solid fa-circle-check" style="color: green;"></i>
                            </button>
                            <button class = 'delete'>
                                <i class="fa-solid fa-trash" style="color: red;"></i>
                            </button>
                        </div>
    `;

    // Event listeners
    let checkTask = newItem.querySelector(".check");
    checkTask.addEventListener("click", () => {
        newItem.querySelector("p").style.textDecoration = "line-through";
    });

    let deleteTask = newItem.querySelector(".delete");
    deleteTask.addEventListener("click", () => {
        taskList.removeChild(newItem)
    });

    taskList.appendChild(newItem);

    inputField.value = "";
};


//Event listener
submitBtn.addEventListener("click", addTask);
clearAllBtn.addEventListener("click", clearAllTasks);