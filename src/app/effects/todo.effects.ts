import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import * as todoActions from '../actions/todo.actions';
import { Todo } from '../models/todo.model';
import { TodoService } from '../services/todo.service';

@Injectable()
export class TodoEffects {

    constructor(
        private actions$: Actions,
        private todoService: TodoService
    ) { }

    loadTodos$: Observable<Action> = createEffect(() =>
        this.actions$.pipe(
            ofType(todoActions.loadTodos),
            switchMap(() =>
                this.todoService.getTodos().pipe(
                    map((todos: Todo[]) =>
                        todoActions.loadTodosSuccess({ todos })
                    ),
                    catchError(error =>
                        of(todoActions.loadTodosFailure({ error }))
                    )
                )
            )
        ),
        { resubscribeOnError: false }
    );

    loadTodoById$: Observable<Action> = createEffect(() =>
        this.actions$.pipe(
            ofType(todoActions.loadTodoById),
            switchMap((action) =>
                this.todoService.getTodoById(action.id).pipe(
                    map((todo: Todo) =>
                        todoActions.loadTodoByIdSuccess({ todo })
                    ),
                    catchError(error =>
                        of(todoActions.loadTodoByIdFailure({ error }))
                    )
                )
            )
        ),
        { resubscribeOnError: false }
    );

    updateTodo$: Observable<Action> = createEffect(() =>
        this.actions$.pipe(
            ofType(todoActions.updateTodo),
            switchMap((action) =>
                this.todoService.updateTodo(action.todo).pipe(
                    map((todo: Todo) =>
                        todoActions.updateTodoSuccess({ todo })
                    ),
                    catchError(error =>
                        of(todoActions.updateTodoFailure({ error }))
                    )
                )
            )
        ),
        { resubscribeOnError: false }
    );


}