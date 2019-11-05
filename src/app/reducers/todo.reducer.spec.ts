import { initialState, todoReducer, getTodosOrdered, TodoState, getTodoById } from './todo.reducer';
import { Todo } from '../models/todo.model';
import { loadTodos, loadTodosSuccess, loadTodosFailure, createTodo, createTodoSuccess, createTodoFailure } from '../actions/todo.actions';

describe('User Reducer', () => {
    const todo: Todo = {
        id: 1,
        title: 'Test',
        description: 'test test',
        isDone: false
    };

    const todoState: TodoState = {
        loaded: true,
        loading: false,
        todos: [{
            id: 1,
            title: 'Test',
            description: 'test test',
            isDone: false
        },
        {
            id: 2,
            title: 'Test2',
            description: 'test test 2',
            isDone: true
        },
        {
            id: 3,
            title: 'Test3',
            description: 'test test 3',
            isDone: false
        }]
    };

    it('should re-arrange todos with #getTodosOrdered', () => {
        let newOrder: Todo[] = [{
            id: 3,
            title: 'Test3',
            description: 'test test 3',
            isDone: false
        }, {
            id: 1,
            title: 'Test',
            description: 'test test',
            isDone: false
        }, {
            id: 2,
            title: 'Test2',
            description: 'test test 2',
            isDone: true
        }];

        var result = getTodosOrdered(todoState);

        expect(result).toEqual(newOrder);
    });

    it('should get todo by Id with #getTodoById', () => {
        var result = getTodoById(1, todoState);
        expect(result).toEqual(todo);
    });

    describe('undefined action', () => {
        it('should return the default state', () => {
            const action = { type: 'NOOP' } as any;
            const result = todoReducer(undefined, action);

            expect(result).toBe(initialState);
        });
    });

    describe('[TODO] Load Todos', () => {
        it('should toggle loading state', () => {
            const action = loadTodos();
            const result = todoReducer(initialState, action);

            expect(result).toEqual({
                ...initialState,
                loading: true
            });
        });
    });

    describe('[TODO] Load Todos Success', () => {
        it('should add all todos to state', () => {
            const todos = [todo];
            const action = loadTodosSuccess({ todos });
            const result = todoReducer(initialState, action);

            expect(result).toEqual({
                ...initialState,
                loaded: true,
                loading: false,
                todos: todos
            });
        });
    });

    describe('[TODO] Load Todos Fail', () => {
        it('should update error in state', () => {
            const error = new Error();
            const action = loadTodosFailure({ error });
            const result = todoReducer(initialState, action);

            expect(result).toEqual({
                ...initialState,
                loaded: true,
                loading: false,
                error: action.error
            });
        });
    });

    describe('[TODO] Create Todos', () => {
        it('should toggle creating state', () => {
            const action = createTodo({ todo: todo });
            const result = todoReducer(initialState, action);

            expect(result).toEqual({
                ...initialState,
                loaded: false,
                loading: true
            });
        });
    });

    describe('[TODO] Create Todos Success', () => {
        it('should add todo to state', () => {
            const todos = [todo];
            const action = createTodoSuccess({ todo: todo });
            const result = todoReducer(initialState, action);

            expect(result).toEqual({
                ...initialState,
                loaded: true,
                loading: false,
                todos: todos
            });
        });
    });

    describe('[TODO] Create Todos Fail', () => {
        it('should update error in state', () => {
            const error = new Error();
            const action = createTodoFailure({ error });
            const result = todoReducer(initialState, action);

            expect(result).toEqual({
                ...initialState,
                loaded: true,
                loading: false,
                error: action.error
            });
        });
    });



});