import { makeAutoObservable, action } from 'mobx';

export interface Todo {
  id: number;
  title: string;
}

export class TodoStoreImpl {
  todos: Todo[] = [];
  newTodo: string = '';

  constructor() {
    makeAutoObservable(this, {
      addTodo: action,
      removeTodo: action,
      setNewTodo: action,
      load: action,
    });
  }

  load: (url: string) => void = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((json) => {
        this.todos = [...json.slice(0, 5)];
      });
  };

  addTodo = (title: string) => {
    this.todos.push({
      id: Math.floor(Math.random() * 100),
      title,
    });
  };

  removeTodo = (title: string) => {
    this.todos = this.todos.filter((todo) => todo.title !== title);
  };

  setNewTodo = (value: string) => {
    this.newTodo = value; // Acción para actualizar newTodo
  };
}

export const todoStore = new TodoStoreImpl();
