import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { UserComponent } from './components/user/user.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
 {path:'', component: HomeComponent},
 {path:'login', component:LoginComponent},
 {path:'mis-datos', component:UserEditComponent},
 {path:'registro', component:RegisterComponent},
 {path:'gente/:page', component:UsersComponent},
 {path:'gente', component:UsersComponent},
 {path:'timeline', component:TimelineComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
