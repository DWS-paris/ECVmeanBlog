// Importer les classes pour définir les routes
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importer le composant à utiliser dans le route
import { AddpostComponent } from './addpost.component';

// Créer une contante pour définir le comportement de la route
const route: Routes = [
    {
        path: '',
        component: AddpostComponent
    }
];

// Exporter le module de route
export const Routing: ModuleWithProviders = RouterModule.forChild(route);