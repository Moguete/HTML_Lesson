const container = document.getElementById('container');

async function fetchAndDisplayTodo() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/4');

    if (!response.ok) {
      throw new Error('No se pudo obtener el Todo');
    }

    const todo = await response.json();

    const h2Element = document.createElement('h2');
    h2Element.textContent = todo.title;

    const checkboxElement = document.createElement('input');
    checkboxElement.type = 'checkbox';
    checkboxElement.checked = todo.completed;

    container.appendChild(h2Element);
    container.appendChild(checkboxElement);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

fetchAndDisplayTodo();
