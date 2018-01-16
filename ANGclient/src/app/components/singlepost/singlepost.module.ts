// Importer la class pour définir un module
import { NgModule } from '@angular/core';

// Importer le module de route
import { Routing } from './singlepost.route';

// Importer le composant
import { SinglepostComponent } from './singlepost.component';

// Définition du module
@NgModule({
    declarations: [ SinglepostComponent ],
    imports: [ Routing ]
})

// Exporter le module
export class SinglepostModule {};