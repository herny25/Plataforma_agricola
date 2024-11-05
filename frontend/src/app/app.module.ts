import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { StoreModule } from './pages/store/store.module';
import { HelpModule } from './pages/help/help.module';
import { ProfileModule } from './pages/profile/profile.module';
import { PostsModule } from './pages/posts/posts.module';
import { HomeModule } from './pages/home/home.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync('noop')
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

