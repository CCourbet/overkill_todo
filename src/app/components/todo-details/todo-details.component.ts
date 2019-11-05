import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Todo } from 'src/app/models/todo.model';
import { TodoState, getTodoById } from 'src/app/reducers/todo.reducer';
import * as todoActions from '../../actions/todo.actions';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.scss']
})
export class TodoDetailsComponent implements OnInit {
  public todo$: Observable<Todo>;
  public isLoaded: Observable<boolean> = this.store.select(state => state.todo.loaded);

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<{ todo: TodoState }>
  ) { }

  ngOnInit() {
    this.isLoaded.subscribe(loaded => {
      if (!loaded) {
        this.store.dispatch(todoActions.loadTodos());
      }
    });

    this.getTodo();
  }

  private getTodo() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.todo$ = this.store.select(state => getTodoById(id, state.todo));
    this.store.dispatch(todoActions.loadTodoById({ id: id }));
  }

  public goBack() {
    this.router.navigate(['/']);
  }
}
