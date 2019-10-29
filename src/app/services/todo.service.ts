import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

import { Todo } from '../models/todo.model';
import { Observable, throwError } from 'rxjs';

@Injectable()
export class TodoService {

    private todosUrl = '/api/todos';

    constructor(private http: HttpClient) {
    }

    getTodos(): Observable<Todo[]> {
        return this.http.get<Todo[]>(this.todosUrl)
            .pipe(catchError(this.handleError));
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return throwError(error);
    }
}

