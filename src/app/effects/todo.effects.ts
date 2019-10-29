import { Injectable } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { map, catchError, switchMap } from 'rxjs/operators';
import * as todoActions from '../actions/todo.actions';
import { Todo } from '../models/todo.model';

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


}