import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import * as todoActions from '../actions/todo.actions';
import { Todo } from '../models/todo.model';
import { TodoState } from '../reducers/todo.reducer';
import { TodoService } from '../services/todo.service';

@Injectable()
export class TodoEffects {

    constructor(
        private actions$: Actions,
        private todoService: TodoService,
        private store: Store<TodoState>
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