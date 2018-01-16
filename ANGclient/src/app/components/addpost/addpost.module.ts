// Importer la class pour définir un module
import { NgModule } from '@angular/core';

// Importer le module de route
import { Routing } from './addpost.route';

// Importer le composant
import { AddpostComponent } from './addpost.component';

// Définition du module
@NgModule({
    declarations: [ AddpostComponent ],
    imports: [ Routing ]
})

// Exporter le module
export class AddpostModule {};