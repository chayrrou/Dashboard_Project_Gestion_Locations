import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Logement } from 'src/app/model/logement';
import { HabitantService } from 'src/app/service/habitant.service';
import { LogementService } from 'src/app/service/logement.service';
import { ProprietaireService } from 'src/app/service/proprietaire.service';

@Component({
  selector: 'app-modifier-logement',
  templateUrl: './modifier-logement.component.html',
  styleUrls: ['./modifier-logement.component.css']
})
export class ModifierLogementComponent implements OnInit {

  @Input()  logement!:Logement;
  @Output() notify= new EventEmitter<Logement>();
 
  logementForm : FormGroup= new FormGroup({})
  habitantForm : FormGroup= new FormGroup({})
  proprietaireForm : FormGroup= new FormGroup({})

  constructor(private fb:FormBuilder,private logementService:LogementService,private router:Router,private proprietaireService :ProprietaireService,private habitantService:HabitantService) { }

  ngOnInit(): void {

    this.logementForm = this.fb.nonNullable.group({
        adresse:[this.logement.adresse],
        description :[this.logement.description],
        prix:[this.logement.prix]
    });

    this.habitantForm=this.fb.nonNullable.group({
            id:[this.logement.habitant.id],
            nom: [this.logement.habitant.nom],
            prenom:[this.logement.habitant.prenom],
            telephone:[this.logement.habitant.telephone],
            mail:[this.logement.habitant.mail],
            profession:[this.logement.habitant.profession]
    });

    this.proprietaireForm = this.fb.nonNullable.group({
          id:[this.logement.proprietaire.id],
          nom: [this.logement.proprietaire.nom],
          prenom:[this.logement.proprietaire.prenom],
          telephone:[this.logement.proprietaire.telephone],
          mail:[this.logement.proprietaire.mail],
    });


    
  }

  onModifier(){
  
    console.log("logement Form",this.logementForm.value)
    console.log("habitant Form",this.habitantForm.value)
    this.logementService.updateLogement(this.logement.id,{...this.logementForm.value,habitant:this.habitantForm.value,proprietaire:this.proprietaireForm.value})
    .subscribe(
      data =>{ this.notify.emit(data)}
    )
}

}
