import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { QuestionComponent } from './question/question.component';
import { HeaderComponent } from './header/header.component';
import { ResultComponent } from './result/result.component';

const routes: Routes = [
  {
    path:'',
    component:WelcomePageComponent
  },
  {
    path:'result',
    component:ResultComponent
  },
  {
    path:'welcome',
    component:WelcomePageComponent
  },
  {
    path:'question',
    component:QuestionComponent
  },
  {
    path:'header',
    component:HeaderComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
