import { TestBed } from "@angular/core/testing";
import { TodoEffects } from './todo.effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { ReplaySubject } from 'rxjs';
import { TodoService } from '../services/todo.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppModule } from '../app.module';

describe('TodoEffects', () => {
    let todoEffects: TodoEffects;
    let actions: ReplaySubject<any>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule,
                AppModule
            ],
            providers: [
                TodoEffects,
                TodoService,
                provideMockActions(() => actions)
            ]
        });

        todoEffects = TestBed.get(TodoEffects);
    });

    it('should be created', () => {
        expect(todoEffects).toBeTruthy();
    });

});