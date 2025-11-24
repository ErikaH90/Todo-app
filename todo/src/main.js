import "./style.css";

const button = document.getElementById("button");
const todo = document.getElementById("todo");
const list = document.getElementById("list");

const todoItems = [
    { text: "Handla", done: false },
    { text: "Tvätta", done: false },
    { text: "Städa", done: false }tsc -v


    
];

const todoList = (todo) => {
    const li = document.createElement("li");
    li.textContent = todo.text;
    const button = document.createElement("button");
    button.textContent = "Ta bort";
    button.addEventListener("click", () => { 
        li.remove();
        todo.done = true;
    });
    li.appendChild(button);
    return li;
}

todoItems.forEach(todo => {
    const li = todoList(todo);
    list.appendChild(li);
});

button.addEventListener("click", () => {
    const input = todo.value.trim();
    const newTodo = { text: input, done: false };
    todoItems.push(newTodo);
    const listElement = document.createElement("li");
    listElement.textContent = input;
    const button = document.createElement("button");
    button.textContent = "Ta bort";
    button.addEventListener("click", () => {
        listElement.remove();
        newTodo.done = true;
    });
    listElement.appendChild(button);
    list.appendChild(listElement);
    todo.value = "";
});
