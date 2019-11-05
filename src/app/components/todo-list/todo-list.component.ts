import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Todo } from 'src/app/models/todo.model';
import { getTodosOrdered, TodoState } from 'src/app/reducers/todo.reducer';
import * as todoActions from '../../actions/todo.actions';
import { TodoCreateComponent } from '../todo-create/todo-create.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  public todos$: Observable<Todo[]> = this.store.select(state => getTodosOrdered(state.todo));
  public isLoaded$: Observable<boolean> = this.store.select(state => state.todo.loaded);

  constructor(
    private store: Store<{ todo: TodoState }>,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.store.dispatch(todoActions.loadTodos());
  }

  public createNewTodo(): void {
    this.dialog.open(TodoCreateComponent, {
      width: '30%',
      restoreFocus: false
    });
  }

  public toggleStatus(event: Todo): void {
    this.store.dispatch(todoActions.updateTodo({ id: event.id, todo: event }));
  }

}
