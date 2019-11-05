import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppMaterialModule } from './app-material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoCreateComponent } from './components/todo-create/todo-create.component';
import { TodoDetailsComponent } from './components/todo-details/todo-details.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoEffects } from './effects/todo.effects';
import { todoReducer } from './reducers/todo.reducer';
import { InMemoryDataService } from './services/in-memory-data.service';
import { TodoService } from './services/todo.service';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoDetailsComponent,
    TodoCreateComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppMaterialModule,
    AppRoutingModule,
    EffectsModule.forRoot([TodoEffects]),
    StoreModule.forRoot({ todo: todoReducer })
  ],
  entryComponents: [TodoListComponent, TodoCreateComponent],
  providers: [
    TodoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
