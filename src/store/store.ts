import { makeAutoObservable, action } from 'mobx';

export interface Todo {
  id: number;
  task: string;
}

export class TodoStoreImpl {
  todos: Todo[] = [];
  newTodo: string = '';

  constructor() {
    makeAutoObservable(this, {
      addTodo: action,
      removeTodo: action,
      setNewTodo: action, // Habilitamos esta acción
    });
  }

  addTodo = (task: string) => {
    this.todos.push({
      id: this.todos.length,
      task,
    });
  };

  removeTodo = (task: string) => {
    this.todos = this.todos.filter((todo) => todo.task !== task);
  };

  setNewTodo = (value: string) => {
    this.newTodo = value; // Acción para actualizar newTodo
  };
}

export const todoStore = new TodoStoreImpl();
