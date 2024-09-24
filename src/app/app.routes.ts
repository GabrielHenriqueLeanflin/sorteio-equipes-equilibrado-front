import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import {authGuard} from "./auth.guard";

export const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: 'dashboard', component: DashboardComponent, canActivate: [authGuard] },
];
