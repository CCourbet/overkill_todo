import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { AppMaterialModule } from 'src/app/app-material.module';
import { todoReducer } from 'src/app/reducers/todo.reducer';

import { TodoCreateComponent } from './todo-create.component';
import { By } from '@angular/platform-browser';

describe('TodoCreateComponent', () => {
  let component: TodoCreateComponent;
  let fixture: ComponentFixture<TodoCreateComponent>;

  const mockDialogRef = {
    close: jasmine.createSpy('close')
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TodoCreateComponent],
      imports: [
        ReactiveFormsModule,
        BrowserAnimationsModule,
        AppMaterialModule,
        StoreModule.forRoot({
          todo: todoReducer,
        }),
      ],
      providers: [
        {
          provide: MatDialogRef,
          useValue: mockDialogRef
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#onCancel should close the dialog', () => {
    component.onCancel();
    expect(mockDialogRef.close).toHaveBeenCalled();
  });

  it('#onCreate should close the dialog', () => {
    component.onCreate();
    expect(mockDialogRef.close).toHaveBeenCalled();
  });

  it('should update the control with new input', () => {
    const title = new FormControl('old value');
    fixture.componentInstance.title = title;
    fixture.detectChanges();
  
    const input = fixture.debugElement.query(By.css('input'));
    expect(input.nativeElement.value).toEqual('old value');
  
    input.nativeElement.value = 'updated value';
    input.nativeElement.dispatchEvent(new Event('input'));
  
    expect(title.value).toEqual('updated value');
  });

});
