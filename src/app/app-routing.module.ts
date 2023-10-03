import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogementComponent } from './Gestionlocations/logement/logement.component';
import { AjouteLogementComponent } from './Gestionlocations/ajoute-logement/ajoute-logement.component';
import { DetailLogementComponent } from './Gestionlocations/detail-logement/detail-logement.component';
import { HabitantComponent } from './Gestionlocations/habitant/habitant.component';
import { ModifierLogementComponent } from './Gestionlocations/modifier-logement/modifier-logement.component';
import { ProprietaireComponent } from './Gestionlocations/proprietaire/proprietaire.component';
import { AjouterHabitantComponent } from './Gestionlocations/ajouter-habitant/ajouter-habitant.component';
import { ModifierHabitantComponent } from './Gestionlocations/modifier-habitant/modifier-habitant.component';
import { AjouterProprietaireComponent } from './Gestionlocations/ajouter-proprietaire/ajouter-proprietaire.component';
import { ModifierProprietaireComponent } from './Gestionlocations/modifier-proprietaire/modifier-proprietaire.component';

const routes: Routes = [
  {path:'logement',title:'Logement', component:LogementComponent},
  {path:'ajouteLogement',title:'AjouteLogement', component:AjouteLogementComponent},
  {path:'logement/:id',title:'DetailLogement', component:DetailLogementComponent},
  {path:'habitant',title:'habitant', component:HabitantComponent},
  {path:'modifier',title:'Modifier', component:ModifierLogementComponent},
  {path:'proprietaire',title:'owner', component:ProprietaireComponent},
  {path:'ajouteHabitant',title:'habitant', component:AjouterHabitantComponent},
  {path:'modifierHabitant/:id',title:'habitantModifier', component:ModifierHabitantComponent},
  {path:'modifierProprietaire/:id',title:'proprietaireModifier', component:ModifierProprietaireComponent},
  {path:'ajouterProprietaire',title:'proprietaire', component:AjouterProprietaireComponent},
  {path:'', redirectTo:'logement', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
