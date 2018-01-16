// Importer les classes pour définir les routes
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importer le composant à utiliser dans le route
import { DashboardComponent } from './dashboard.component';

// Créer une contante pour définir le comportement de la route
const route: Routes = [
    {
        path: '',
        component: DashboardComponent
    }
];

// Exporter le module de route
export const Routing: ModuleWithProviders = RouterModule.forChild(route);