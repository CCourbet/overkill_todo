import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Todo } from 'src/app/models/todo.model';
import * as todoActions from '../../actions/todo.actions';
import { TodoState, getTodos } from 'src/app/reducers/todo.reducer';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  public todos$: Observable<Todo[]> = this.store.select(state => getTodos(state.todo));
  public isLoading: Observable<boolean> = this.store.select(state => state.todo.loading);
  constructor(private store: Store<{ todo: TodoState }>) {}

  ngOnInit() {
    this.store.dispatch(todoActions.loadTodos());
  }

}
