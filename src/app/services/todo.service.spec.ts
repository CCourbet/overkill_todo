import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';
import { inject, TestBed } from "@angular/core/testing";

import { Todo } from '../models/todo.model';
import { TodoService } from './todo.service';

describe('TodoService', () => {
    let todoService: TodoService;
    let httpMock: HttpTestingController;

    const testTodos: Todo[] = [
        { id: 0, title: 'Sterilize the cat', isDone: false },
        { id: 1, title: 'Call my dad', isDone: false },
        { id: 2, title: 'Book a hotel for my holidays', isDone: true }
    ]

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [TodoService]
        });
        todoService = TestBed.get(TodoService);
        httpMock = TestBed.get(HttpTestingController);
    });

    it('should be initialized', inject([TodoService], (todoService: TodoService) => {
        expect(todoService).toBeTruthy();
    }));

    it('should load all todos on request', (done) => {
        todoService.getTodos().subscribe((res: any) => {
            expect(res).toEqual(testTodos);
            done();
        });
        let todosRequest: TestRequest = httpMock.expectOne('/api/todos');
        todosRequest.flush(testTodos);
        httpMock.verify();
    });
    
});