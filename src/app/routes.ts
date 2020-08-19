import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { PlayComponent } from './play/play.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'play', component: PlayComponent },
  { path: 'settings', component: SettingsComponent },
  { path: '**', component: LoginComponent },
];

export const appRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
