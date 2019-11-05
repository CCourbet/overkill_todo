import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Todo } from '../models/todo.model';

@Injectable()
export class TodoService {

    private todosUrl = '/api/todos';
    private httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'my-auth-token'
        })
    };

    constructor(private http: HttpClient) {
    }

    getTodos(): Observable<Todo[]> {
        return this.http.get<Todo[]>(this.todosUrl)
            .pipe(catchError(this.handleError));
    }

    getTodoById(id: number): Observable<Todo> {
        return this.http.get<Todo>(`${this.todosUrl}/${id}`)
            .pipe(catchError(this.handleError));
    }

    createTodo(todo: Todo): Observable<Todo> {
        return this.http.post<Todo>(this.todosUrl, todo, this.httpOptions)
            .pipe(catchError(this.handleError));
    }

    updateTodo(todo: Todo): Observable<Todo> {
        return this.http.put<Todo>(this.todosUrl, todo, this.httpOptions)
            .pipe(catchError(this.handleError));
    }

    private handleError(error: any) {
        return throwError(error);
    }
}

