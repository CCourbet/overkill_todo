import { createAction, props } from '@ngrx/store';

import { Todo } from '../models/todo.model';

export const loadTodos = createAction('[Todo] Load Todos');
export const loadTodosSuccess = createAction('[TODO] Load Todos Success', props<{ todos: Todo[] }>());
export const loadTodosFailure = createAction('[TODO] Load Todos Failure', props<{ error: any }>());
export const updateTodo = createAction('[TODO] Update Todo', props<{ id: number, todo: Todo }>());
export const updateTodoSuccess = createAction('[TODO] Update Todo Success', props<{ todo: Todo }>());
export const updateTodoFailure = createAction('[TODO] Update Todo Failure', props<{ error: any }>());
export const loadTodoById = createAction('[TODO] Load Todo by Id', props<{ id: number }>());
export const loadTodoByIdSuccess = createAction('[TODO] Load Todo by Id Success', props<{ todo: Todo }>());
export const loadTodoByIdFailure = createAction('[TODO] Load Todo by Id Failure', props<{ error: any }>());
export const createTodo = createAction('[TODO] Create Todo', props<{ todo: Todo }>());
export const createTodoSuccess = createAction('[TODO] Create Todo Success', props<{ todo: Todo }>());
export const createTodoFailure = createAction('[TODO] Create Todo Failure', props<{ error: any }>());
