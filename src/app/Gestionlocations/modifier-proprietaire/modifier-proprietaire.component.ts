import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProprietaireService } from 'src/app/service/proprietaire.service';

@Component({
  selector: 'app-modifier-proprietaire',
  templateUrl: './modifier-proprietaire.component.html',
  styleUrls: ['./modifier-proprietaire.component.css']
})
export class ModifierProprietaireComponent implements OnInit {
  proprietaireForm : FormGroup= new FormGroup({})
  idProprietaire!:number
  constructor(private activatedRoute:ActivatedRoute,private proprietaireService :ProprietaireService,private fb:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.proprietaireForm=this.fb.nonNullable.group({
      id:[''],
      nom: [''],
      prenom:[''],
      telephone:[''],
      mail:['']
  });

    this.idProprietaire = this.activatedRoute.snapshot.params['id'];
    this.proprietaireService.getProprietaireById(this.idProprietaire).subscribe(data=>{
        this.proprietaireForm.setValue({
          id:data.id,
          nom: data.nom,
          prenom:data.prenom,
          telephone:data.telephone,
          mail:data.mail
        })
  });

 
}

onModifier(){

  this.proprietaireService.updateProprietaire(this.idProprietaire,this.proprietaireForm.value).subscribe(data=> 
    {
      this.router.navigate(['/proprietaire'])
        
    })
}
}
