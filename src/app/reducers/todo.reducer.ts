import { Action, createReducer, on } from '@ngrx/store';

import * as todoActions from '../actions/todo.actions';
import { Todo } from '../models/todo.model';

export interface TodoState {
    loaded: boolean;
    loading: boolean;
    todos: Todo[];
    error?: Error;    
}

export const initialState: TodoState = {
    loaded: false,
    loading: false,
    todos: [],
};

const reducer = createReducer(
    initialState,
    on(todoActions.loadTodos, state => ({
        ...state,
        loading: true
    })),
    on(todoActions.loadTodosSuccess, (state, action) => ({
        ...state,
        loaded: true,
        loading: false,
        todos: [...action.todos]
    })),
    on(todoActions.loadTodosFailure, (state, action) => ({
        ...state,
        loaded: true,
        loading: false,
        error: action.error
    })),
    on(todoActions.createTodo, state => ({
        ...state,
        loaded: false,
        loading: true
    })),
    on(todoActions.createTodoSuccess, (state, action) => ({
        ...state,
        loaded: true,
        loading: false,
        todos: [...state.todos, action.todo]
    })),
    on(todoActions.createTodoFailure, (state, action) => ({
        ...state,
        loaded: true,
        loading: false,
        error: action.error
    }))
);

export function todoReducer(state: TodoState, action: Action) {
    return reducer(state, action);
}

export const getTodosOrdered = (state: TodoState) => {
    let newTodosArray: Todo[];
    newTodosArray = state.todos.filter(todo => todo.isDone);
    newTodosArray = newTodosArray.concat(state.todos.filter(todo => !todo.isDone));
    newTodosArray.reverse();
    return newTodosArray;
};

export const getTodoById = (id: number, state: TodoState) => {
    let todo = state.todos.find(todo => todo.id === id);
    return todo;
};