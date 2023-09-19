const todoList = document.querySelector('.todo-list');

async function fetchYDisplay() {
  try {
    // Realizar la solicitud HTTP a la URL proporcionada
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');

    if (!response.ok) {
      throw new Error('No se pudo obtener la lista de Todos');
    }

    const todos = await response.json();

    todos.forEach((todo) => {
      const listItem = document.createElement('li');
      listItem.textContent = todo.title;
      todoList.appendChild(listItem);
    });
  } catch (error) {
    console.error('Error:', error.message);
  }
}

fetchYDisplay();