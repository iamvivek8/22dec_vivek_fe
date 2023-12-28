function addNewTodo() {
    const newTodoInput = document.getElementById('newTodoInput');
    const newTodoText = newTodoInput.value;


    if (newTodoText.trim() !== '') {
    
      const newTodoItem = document.createElement('li');
      newTodoItem.textContent = newTodoText;

      
      const todoList = document.getElementById('todoList');
      todoList.appendChild(newTodoItem);

    
      newTodoInput.value = '';
    }
  }