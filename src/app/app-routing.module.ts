import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebdesignComponent } from './webdesign/webdesign.component';
import { ParticipantComponent } from './participant/participant.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { SudokuComponent } from './sudoku/sudoku.component';
import { BasketComponent } from './basket/basket.component';
import { PasswordComponent } from './password/password.component';
import { EmailComponent } from './email/email.component';
import { ProjectsComponent } from './projects/projects.component';
import { ChessComponent } from './chess/chess.component';
import { BirdsComponent } from './birds/birds.component';
import { TaskComponent } from './task/task.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { HeroComponent } from './hero/hero.component';
import { HeroesComponent } from './heroes/heroes.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

const routes: Routes = [
  {
    path: 'webdesign',
    component: WebdesignComponent
  },
  {
    path: 'participant',
    component: ParticipantComponent
  },
  {
    path: 'calculator',
    component: CalculatorComponent
  },
  {
    path: 'sudoku',
    component: SudokuComponent
  },
  {
    path: 'basket',
    component: BasketComponent
  },
  {
    path: 'password',
    component: PasswordComponent
  },
  {
    path: 'email',
    component: EmailComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'chess',
    component: ChessComponent
  },
  {
    path: 'bird',
    component: BirdsComponent
  },
  {
    path: 'task',
    component: TaskComponent
  },
  {
    path: 'taskForm',
    component: TaskFormComponent
  },
  {
    path: 'hero',
    component: HeroComponent
  },
  {
    path: 'heroes',
    component: HeroesComponent
  },
  {
    path: 'shoppingCart',
    component: ShoppingCartComponent
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
