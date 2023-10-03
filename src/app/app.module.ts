import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProprietaireComponent } from './Gestionlocations/proprietaire/proprietaire.component';
import { LogementComponent } from './Gestionlocations/logement/logement.component';
import { HabitantComponent } from './Gestionlocations/habitant/habitant.component';
import { MenuComponent } from './Gestionlocations/menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import {MatToolbarModule} from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { AjouteLogementComponent } from './Gestionlocations/ajoute-logement/ajoute-logement.component';
import {MatCardModule} from '@angular/material/card';
import { DetailLogementComponent } from './Gestionlocations/detail-logement/detail-logement.component';
import { ModifierLogementComponent } from './Gestionlocations/modifier-logement/modifier-logement.component';
import { SelectedLogementComponent } from './Gestionlocations/selected-logement/selected-logement.component';
import { AjouterHabitantComponent } from './Gestionlocations/ajouter-habitant/ajouter-habitant.component';
import { ModifierHabitantComponent } from './Gestionlocations/modifier-habitant/modifier-habitant.component';
import { AjouterProprietaireComponent } from './Gestionlocations/ajouter-proprietaire/ajouter-proprietaire.component';
import { ModifierProprietaireComponent } from './Gestionlocations/modifier-proprietaire/modifier-proprietaire.component';




@NgModule({
  declarations: [
    AppComponent,
    HabitantComponent,
    ProprietaireComponent,
    LogementComponent,
    MenuComponent,
    AjouteLogementComponent,
    DetailLogementComponent,
    ModifierLogementComponent,
    SelectedLogementComponent,
    AjouterHabitantComponent,
    ModifierHabitantComponent,
    AjouterProprietaireComponent,
    ModifierProprietaireComponent
      ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatCardModule,
    MatListModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
