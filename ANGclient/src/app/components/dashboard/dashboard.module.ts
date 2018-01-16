// Importer la class pour définir un module
import { NgModule } from '@angular/core';

// Importer le module de route
import { Routing } from './dashboard.route';

// Importer le composant
import { DashboardComponent } from './dashboard.component';
import { NgModel } from '@angular/forms/src/directives/ng_model';
import { Router } from '@angular/router/src/router';

// Définition du module
@NgModule({
    declarations: [ DashboardComponent ],
    imports: [ Routing ]
})

// Exporter le module
export class DashboardModule {};