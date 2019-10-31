import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoDetailsComponent } from './components/todo-details/todo-details.component';

const routes: Routes = [
    { path: '', redirectTo: 'todoList', pathMatch: 'full' },
    { path: 'todoList', component: TodoListComponent },
    { path: 'detail/:id', component: TodoDetailsComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }