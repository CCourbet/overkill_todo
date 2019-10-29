import { createAction, props } from '@ngrx/store';
import { Todo } from '../models/todo.model';

export const loadTodos = createAction('[Todo] Load Collection');

export const loadTodosSuccess = createAction(
    '[TODO] Load Todo Success',
    props<{ todos: Todo[] }>()
);

export const loadTodosFailure = createAction(
    '[TODO] Load Todo Failure',
    props<{error : any}>()
);