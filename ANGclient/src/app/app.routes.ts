// Importer les classes pour définir les routes
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Créer une contante pour définir le comportement de la route
const route: Routes = [
    {
        path: '',
        loadChildren: './components/dashboard/dashboard.module#DashboardModule'
    },
    {
        path: 'addpost',
        loadChildren: './components/addpost/addpost.module#AddpostModule'
    },
    {
        path: 'singlepost',
        loadChildren: './components/singlepost/singlepost.module#SinglepostModule'
    }
];

// Exporter le module de route
export const Routing: ModuleWithProviders = RouterModule.forRoot(route);