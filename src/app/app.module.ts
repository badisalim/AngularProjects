import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebdesignComponent } from './webdesign/webdesign.component';
import { ParticipantComponent } from './participant/participant.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { SudokuComponent } from './sudoku/sudoku.component';
import { BasketComponent } from './basket/basket.component';
import { PasswordComponent } from './password/password.component';
import { EmailComponent } from './email/email.component';
import { TasksComponent } from './tasks/tasks.component';
import { ProjectsComponent } from './projects/projects.component';
import { HttpClientModule } from '@angular/common/http';
import { ChessComponent } from './chess/chess.component';
import { BirdsComponent } from './birds/birds.component';
import { TaskComponent } from './task/task.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { HeroComponent } from './hero/hero.component';
import { HeroesComponent } from './heroes/heroes.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    WebdesignComponent,
    ParticipantComponent,
    EmailComponent,
    CalculatorComponent,
    SudokuComponent,
    BasketComponent,
    PasswordComponent,
    TasksComponent,
    ProjectsComponent,
    ChessComponent,
    BirdsComponent,
    TaskComponent,
    TaskFormComponent,
    HeroComponent,
    HeroesComponent,
    ShoppingCartComponent,
    ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent],

})

export class AppModule { }

