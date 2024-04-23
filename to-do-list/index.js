const btn = document.querySelector(".btnSubmit");
const items = document.querySelector(".items");
const text = document.querySelector(".textArea");


function addItems(event){
    let newText = text.value.trim();
    
    //create a new item and add to the items list
    const mainDiv = document.createElement("div");
    mainDiv.classList.add("main");
    const item = document.createElement("div");
    item.textContent = newText;
    item.classList.add("area");
    mainDiv.appendChild(item);

    // add complete button in the item
    const buttons = document.createElement("div");
    buttons.classList.add("buttons");
    const completeButton = document.createElement("button");
    completeButton.textContent = "Complete";
    completeButton.classList.add("btn-complete");
    buttons.appendChild(completeButton);

    // add delete button in the item
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("btn-delete");
    buttons.appendChild(deleteButton);

    mainDiv.appendChild(buttons);
    
    items.appendChild(mainDiv);
    text.value = "";
}

function deleteItem(event){
    const deleteButton = event.target.parentElement;
    const mainDiv = deleteButton.parentElement;
    items.removeChild(mainDiv);
}

function completeItem(event){
    const completeButton = event.target.parentElement;
    const mainDiv = completeButton.parentElement;
    mainDiv.classList.toggle("completed");
}

btn.addEventListener("click", addItems);

items.addEventListener("click", (event)=>{
    if(event.target.classList.contains("btn-delete")){
        deleteItem(event);
    }
    if(event.target.classList.contains("btn-complete")){
        completeItem(event);
    }
});
