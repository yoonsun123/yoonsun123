function addTodo() {
  const input = document.getElementById('todo-input');
  const text = input.value.trim();
  if (text === '') return;

  const li = document.createElement('li');
  li.textContent = text;

  document.getElementById('todo-list').appendChild(li);
  input.value = '';
}