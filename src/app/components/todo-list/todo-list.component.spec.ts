import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListComponent } from './todo-list.component';
import { AppMaterialModule } from 'src/app/app-material.module';
import { StoreModule } from '@ngrx/store';
import { todoReducer, TodoState } from 'src/app/reducers/todo.reducer';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { doesNotThrow } from 'assert';
import { DebugElement } from '@angular/core';

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppMaterialModule,
        RouterTestingModule.withRoutes([]),
        StoreModule.forRoot({
          todo: todoReducer,
        }),
      ],
      declarations: [TodoListComponent]
    })
      .compileComponents();
  }));
  
});
