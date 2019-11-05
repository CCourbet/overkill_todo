import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';

import { AppMaterialModule } from 'src/app/app-material.module';
import { todoReducer } from 'src/app/reducers/todo.reducer';
import { TodoListComponent } from './todo-list.component';
import { of } from 'rxjs';
import { Todo } from 'src/app/models/todo.model';


describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
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

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call #createNewTodo on clicking the create button', () => {
    let createNewTodoSpy = spyOn(component, "createNewTodo");

    let button = fixture.debugElement.query(By.css('button'));
    button.triggerEventHandler('click', null);

    expect(createNewTodoSpy).toHaveBeenCalled();
  });

  it('should call #toggleStatus on clicking on a checkbox', () => {
    component.todos$ = of([{ id: 0, title: 'test', description: "descript test", isDone: false }]);
    component.isLoaded$ = of(true);
    let todo: Todo = { id: 0, title: 'test', description: "descript test", isDone: false };
    fixture.detectChanges();

    let toggleStatusSpy = spyOn(component, "toggleStatus");

    let checkbox = fixture.debugElement.queryAll(By.css('mat-checkbox'));
    checkbox[0].triggerEventHandler('change', todo);
    fixture.detectChanges();

    expect(toggleStatusSpy).toHaveBeenCalled();
  });

});
