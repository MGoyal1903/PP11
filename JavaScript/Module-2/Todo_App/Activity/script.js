let todoinput = document.querySelector(".todo-input");
let addtodobtn = document.querySelector(".add-todo");
let todolists = document.querySelector(".todo-list-container");

// addtodobtn.addEventListener("click", function(e)
// {
//     let todoinputvalue = todoinput.value;
//     if(todoinputvalue)
//     {
//         console.log(todoinputvalue);
//     }
//     todoinput.value="";
// })

// todoinput.addEventListener("keypress",function(e)
// {
//     if(e.key == "Enter")
//     {
//         let todoinputvalue = todoinput.value;
//     if(todoinputvalue)
//     {
//         console.log(todoinputvalue);
//     }
//     todoinput.value="";
//     }
// })


// <------------------Second Method ------------------>

addtodobtn.addEventListener("click", function (e) {
  addtodo();
});

todoinput.addEventListener("keypress", function (e) {
  if (e.key == "Enter") {
    addtodo();
  }
});

function addtodo() {
  let todoinputvalue = todoinput.value;
  if (todoinputvalue) {
    // console.log(todoinputvalue);
    appendtodo(todoinputvalue);
    // it will empty the todoinput
    todoinput.value = "";
  }
}

function appendtodo(todo)
{
  let todoitemdiv = document.createElement("div");
  todoitemdiv.classList.add("todo-item");

  let ptag = document.createElement("p");
  ptag.classList.add("todo-input");
  ptag.textContent = todo;

  let deletetodobutton = document.createElement("button");
  deletetodobutton.classList.add("delete-todo");
  deletetodobutton.textContent = "Delete";
  
  deletetodobutton.addEventListener("click", deleteTodo);

  todoitemdiv.append(ptag);
  todoitemdiv.append(deletetodobutton);

  todolists.append(todoitemdiv);

}

function deleteTodo(e) {
  e.target.parentNode.remove();
}
