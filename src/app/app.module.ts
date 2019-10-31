import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppMaterialModule } from './app-material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoEffects } from './effects/todo.effects';
import { todoReducer } from './reducers/todo.reducer';
import { InMemoryDataService } from './services/in-memory-data.service';
import { TodoService } from './services/todo.service';
import { TodoDetailsComponent } from './components/todo-details/todo-details.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppMaterialModule,
    AppRoutingModule,
    EffectsModule.forRoot([TodoEffects]),
    StoreModule.forRoot({ todo: todoReducer })
  ],
  providers: [
    TodoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
