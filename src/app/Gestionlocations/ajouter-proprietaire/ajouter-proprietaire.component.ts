import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Proprietaire } from 'src/app/model/proprietaire';
import { ProprietaireService } from 'src/app/service/proprietaire.service';

@Component({
  selector: 'app-ajouter-proprietaire',
  templateUrl: './ajouter-proprietaire.component.html',
  styleUrls: ['./ajouter-proprietaire.component.css']
})
export class AjouterProprietaireComponent implements OnInit {

  proprietaire!:Proprietaire[];
  proprietaireForm !: FormGroup;

  constructor(private fb:FormBuilder,private proprietaireService :ProprietaireService ,private router:Router) { }

  ngOnInit(): void {
    this.proprietaireService.getProprietaires().subscribe(data =>
      { 
        this.proprietaire = data;
     });

     this.proprietaireForm = this.fb.nonNullable.group({
        id:[''],
        nom: [''],
        prenom:[''],
        telephone:[''],
        mail:['']
      });
  }

  addProprietaire(){
    this.proprietaireService.addProprietaire(this.proprietaireForm.value).subscribe(
      data => {      
        console.log('¨Proprietaire saved successfully!');
        this.router.navigate(['/proprietaire']);
    })
  }

  annuler(){
    this.proprietaireForm.reset();
  }
}
