import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './MyComponent/todo/todo.component';
import { TodoItemComponent } from './MyComponent/todo-item/todo-item.component';
import { AddTodoComponent } from './Mycomponent/add-todo/add-todo.component';
import { AboutComponent } from './MyComponent/about/about.component';
import { HomeComponent } from './MyComponent/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoItemComponent,
    AddTodoComponent,
    AboutComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
