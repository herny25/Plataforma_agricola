import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilePageComponent } from './pages/profile/profile-page/profile-page.component';
import { StorePageComponent } from './pages/store/store-page/store-page.component';
import { LoginPageComponent } from './pages/login/login-page/login-page.component';
import { PostsPageComponent } from './pages/posts/posts-page/posts-page.component';
import { ChatPageComponent } from './pages/chat/chat-page/chat-page.component';
import { HelpPageComponent } from './pages/help/help-page/help-page.component';
import { HomePageComponent } from './pages/home/home-page/home-page.component';
import { RegisterPageComponent } from './pages/register/register-page/register-page.component';


const routes: Routes = [
  { path: 'home', component:HomePageComponent},
  { path: 'store', component:StorePageComponent},
  { path: 'profile', component:ProfilePageComponent},
  { path: 'login', component:LoginPageComponent},
  { path: 'posts', component:PostsPageComponent},
  { path: 'chat', component:ChatPageComponent},
  { path: 'help', component:HelpPageComponent},
  {path: 'register', component:RegisterPageComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },  // Ruta por defecto
  { path: '**', redirectTo: 'home' }  // Ruta de fallback en caso de error
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
