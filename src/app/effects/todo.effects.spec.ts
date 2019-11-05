import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from "@angular/core/testing";

import { AppModule } from '../app.module';
import { TodoService } from '../services/todo.service';
import { TodoEffects } from './todo.effects';

describe('TodoEffects', () => {
    let todoEffects: TodoEffects;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule,
                AppModule
            ],
            providers: [
                TodoEffects,
                TodoService,
            ]
        });

        todoEffects = TestBed.get(TodoEffects);
    });

    it('should be created', () => {
        expect(todoEffects).toBeTruthy();
    });

});