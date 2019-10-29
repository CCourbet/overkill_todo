import { createReducer, on, Action } from '@ngrx/store';
import * as todoActions from '../actions/todo.actions';
import { Todo } from '../models/todo.model';

export interface TodoState {
    loaded: boolean;
    loading: boolean;
    todos: Todo[];
}

const initialState: TodoState = {
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
    }))
);

export function todoReducer(state: TodoState, action: Action) {
    return reducer(state, action);
}

export const getTodos = (state: TodoState) => state.todos;