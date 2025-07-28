import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Contact } from './pages/contact/contact';
import { Books } from './pages/books/books';
import { Admin } from './pages/admin/admin';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';



export const routes: Routes = [
    { path: '', component: Home },
    { path: 'books', component: Books },
    { path: 'admin', component: Admin },
    { path: 'login', component: Login },        
    { path: 'register', component: Register },
    { path: 'contact', component: Contact }

];
