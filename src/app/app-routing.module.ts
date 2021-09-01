import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FriendComponent } from './friend/friend.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { SignupComponent } from './signup/signup.component';
import { TaskComponent } from './task/task.component';


const routes: Routes = [
  {path: 'friends', component: FriendComponent},
  {path: 'task', component: TaskComponent},
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
