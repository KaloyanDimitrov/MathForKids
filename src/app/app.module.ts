import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ReflectiveInjector } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { appRoutes } from './routes';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SettingsComponent } from './settings/settings.component';
import { PlayComponent } from './play/play.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SettingsService } from './services/settings.service';


@NgModule({
   declarations: [
      AppComponent,
      HeaderComponent,
      LoginComponent,
      AboutComponent,
      SignUpComponent,
      SettingsComponent,
      PlayComponent
   ],
   imports: [
      BrowserModule,
      ReactiveFormsModule,
      appRoutes
   ],
   providers: [
      SettingsService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
