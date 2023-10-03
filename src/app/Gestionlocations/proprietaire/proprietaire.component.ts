import { Component, OnInit } from '@angular/core';
import { Proprietaire } from 'src/app/model/proprietaire';
import { ProprietaireService } from 'src/app/service/proprietaire.service';

@Component({
  selector: 'app-proprietaire',
  templateUrl: './proprietaire.component.html',
  styleUrls: ['./proprietaire.component.css']
})
export class ProprietaireComponent implements OnInit {

  lesProprietaires!:Proprietaire[];

  constructor(private proprietaireService :ProprietaireService) { }

  ngOnInit(): void {
    this.proprietaireService.getProprietaires().subscribe(data =>
      { 
          this.lesProprietaires = data
       })
  }

  supprimer(id:number){
    this.proprietaireService.deleteProprietaire(id).subscribe(
      data =>{ this.lesProprietaires ;
        location.reload();
    })
  }

}
