import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';

import { Todo } from 'src/app/models/todo.model';
import { TodoState } from 'src/app/reducers/todo.reducer';
import * as todoActions from '../../actions/todo.actions';

@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.scss']
})
export class TodoCreateComponent implements OnInit {

  public formIsValid: boolean = true;

  title = new FormControl('');
  description = new FormControl('');

  constructor(
    private dialogRef: MatDialogRef<TodoCreateComponent>,
    private store: Store<{ todo: TodoState }>
  ) { }

  ngOnInit() {
    this.title.valueChanges.subscribe(value => {
      this.formIsValid = (value !== '')? false: true
    });
  }

  public onCancel() {
    this.dialogRef.close();
  }

  public onCreate() {
    let newTodo: Todo = {
      title: this.title.value,
      description: this.description.value,
      isDone: false
    };
    this.store.dispatch(todoActions.createTodo({ todo: newTodo }));
    this.dialogRef.close();
  }

}
