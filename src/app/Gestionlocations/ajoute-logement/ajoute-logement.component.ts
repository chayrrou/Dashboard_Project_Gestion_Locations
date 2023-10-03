import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Habitant } from 'src/app/model/habitant';
import { Logement } from 'src/app/model/logement';
import { Proprietaire } from 'src/app/model/proprietaire';
import { HabitantService } from 'src/app/service/habitant.service';
import { LogementService } from 'src/app/service/logement.service';
import { ProprietaireService } from 'src/app/service/proprietaire.service';

@Component({
  selector: 'app-ajoute-logement',
  templateUrl: './ajoute-logement.component.html',
  styleUrls: ['./ajoute-logement.component.css']
})
export class AjouteLogementComponent implements OnInit {

  lesHabitants!:Habitant[];
  habitant!:Habitant;
  lesProprietaires!:Proprietaire[];
  lesLogement!:Logement[];
   logementForm !: FormGroup;
  habitantForm !: FormGroup;
  proprietaireForm !: FormGroup;

  constructor(private fb:FormBuilder, private logementService:LogementService,private router:Router,private proprietaireService :ProprietaireService,private habitantService:HabitantService) { }

  ngOnInit(): void {

      this.habitantService.getHabitants().subscribe(data =>
        { 
          this.lesHabitants = data;
       });

    this.logementService.getLogements().subscribe(data =>
      this.lesLogement =data);

    this.proprietaireService.getProprietaires().subscribe(data =>
        { 
            this.lesProprietaires = data
         });

      this.logementForm = this.fb.nonNullable.group({
        adresse:['',Validators.required],
        description :[''],
        prix:[''], 
      });

      this.habitantForm = this.fb.nonNullable.group({
              id:[this.habitant.id],
              nom: [this.habitant.nom],
              prenom:[''],
              telephone:[''],
              mail:[''],
              profession:['']
      });

      this.proprietaireForm = this.fb.nonNullable.group({
        id:[''],
        nom: [''],
        prenom:[''],
        telephone:[''],
        mail:['']
      });
  }

  addLogement(){

    console.log('logement',this.logementForm.value);
    console.log('habitant',this.selectHabitant);
    this.logementService.addLogement({...this.logementForm.value,habitant:this.selectHabitant,proprietaire:this.selectProprietaire}).subscribe(
      data => {      
        console.log('logement saved successfully!');
        this.router.navigate(['/logement']);
    })
  }

  annuler(){
    this.logementForm.reset();
    this.habitantForm.reset();
    this.proprietaireForm.reset();
  }

  selectHabitant:any;
  selectProprietaire:any;
  
  onSelected(e:any){
   this.selectHabitant = this.lesHabitants.find((elt) =>elt.id == e.target.value) 
    console.log(this.selectHabitant)
  }
  onSelectedProprietaire(e:any){
    this.selectProprietaire = this.lesProprietaires.find((elt) =>elt.id == e.target.value) 
  }

}
