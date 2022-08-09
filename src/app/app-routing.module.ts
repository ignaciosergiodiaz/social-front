import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { UserComponent } from './components/user/user.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
 {path:'home', component: HomeComponent},
 {path:'login', component:LoginComponent},
 {path:'mis-datos', component:UserEditComponent},
 {path:'registro', component:RegisterComponent},
 {path:'gente/:page', component:UsersComponent},
 {path:'gente/:page', component:UsersComponent},
 {path:'timeline', component:TimelineComponent},
 {path:'perfil/:id', component:ProfileComponent},
 {path:'**', component:HomeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
