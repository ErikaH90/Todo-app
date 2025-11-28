import "./style.css";

const button = document.getElementById("button");
const todo = document.getElementById("todo");
const list = document.getElementById("list");

// Hämta todos från localStorage eller använd hårdkodad lista
let todoItems = JSON.parse(localStorage.getItem("todos")) || [
    { text: "Handla", done: false },
    { text: "Tvätta", done: false },
    { text: "Städa", done: false }
];

// Funktion som skapar li-element för en todo
const todoList = (todo) => {
    const li = document.createElement("li");
    li.textContent = todo.text;

    // Om todo är klar, visa det visuellt
    if (todo.done) {
        li.style.textDecoration = "line-through";
        li.style.color = "gray";
    }

    const button = document.createElement("button");
    button.textContent = todo.done ? "Ångra" : "Ta bort";

    button.addEventListener("click", () => {
        // Växla done-status
        todo.done = !todo.done;
        renderTodos();
    });

    li.appendChild(button);
    return li;
};

// Funktion för att rendera alla todos
const renderTodos = () => {
    list.innerHTML = "";
    // Sortera så att oklara todos visas först
    todoItems.sort((a, b) => a.done - b.done);

    todoItems.forEach(todo => {
        const li = todoList(todo);
        list.appendChild(li);
    });

    // Spara i localStorage
    localStorage.setItem("todos", JSON.stringify(todoItems));
};

// Rendera initialt
renderTodos();

// Lägg till ny todo via input
button.addEventListener("click", () => {
    const inputValue = todo.value.trim();
    if (inputValue === "") return;

    const newTodo = { text: inputValue, done: false };
    todoItems.push(newTodo);
    todo.value = "";

    renderTodos();
});

