import { Routes } from '@angular/router';
import { ChatComponent } from './components/chat/chat.component';
import { AuthGuardService } from './guards/auth-guard.service';
import { NoAuthGuardService } from './guards/no-auth-guard.service';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';


// TODO: 6

export const routes: Routes = [
  { path: '', component: ChatComponent, runGuardsAndResolvers: 'always' },
  { path: 'register', component: RegisterComponent, runGuardsAndResolvers: 'always' },
  { path: 'login', component: LoginComponent, runGuardsAndResolvers: 'always' },
];