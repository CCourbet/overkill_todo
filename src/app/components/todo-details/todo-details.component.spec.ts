import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { of } from 'rxjs';

import { AppMaterialModule } from 'src/app/app-material.module';
import { todoReducer } from 'src/app/reducers/todo.reducer';
import { TodoDetailsComponent } from './todo-details.component';

describe('TodoDetailsComponent', () => {
  let component: TodoDetailsComponent;
  let fixture: ComponentFixture<TodoDetailsComponent>;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppMaterialModule,
        RouterTestingModule,
        StoreModule.forRoot({
          todo: todoReducer,
        }),
      ],
      declarations: [TodoDetailsComponent]
    })
      .compileComponents();
    router = TestBed.get(Router);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call go back method on click', () => {
    let goBackSpy = spyOn(component, "goBack");

    component.todo$ =  of({ id: 0, title: 'test', description: "descript test", isDone: false });
    fixture.detectChanges();

    let button = fixture.debugElement.query(By.css('button'));
    button.triggerEventHandler('click', null);

    expect(goBackSpy).toHaveBeenCalled();
  });

  it('should redirect on go back method call', () => {
    let navigateSpy = spyOn(router, 'navigate');
    component.goBack();
    fixture.detectChanges();

    expect(navigateSpy).toHaveBeenCalledWith(['/']);
  })

});
