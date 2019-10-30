import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Todo } from 'src/app/models/todo.model';
import { getTodosOrdered, TodoState } from 'src/app/reducers/todo.reducer';
import * as todoActions from '../../actions/todo.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  public todos$: Observable<Todo[]> = this.store.select(state => getTodosOrdered(state.todo));
  public isLoading: Observable<boolean> = this.store.select(state => state.todo.loading);
  constructor(private store: Store<{ todo: TodoState }>) {}

  ngOnInit() {
    this.store.dispatch(todoActions.loadTodos());
  }

  public onCheckboxClick(event: Todo) {
    event.isDone = !event.isDone;
    this.store.dispatch(todoActions.updateTodo({id: event.id, todo: event}));
  }

}
