import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Logement } from 'src/app/model/logement';
import { LogementService } from 'src/app/service/logement.service';

@Component({
  selector: 'app-detail-logement',
  templateUrl: './detail-logement.component.html',
  styleUrls: ['./detail-logement.component.css']
})
export class DetailLogementComponent implements OnInit {

  logement!: Logement;

  display :boolean = false;

  constructor(private activatedRoute:ActivatedRoute,private logementService : LogementService) { }

  ngOnInit(): void {
    let idLogement:number = this.activatedRoute.snapshot.params['id'];
    this.logementService.getLogementById(idLogement)
    .subscribe(
      data => {this.logement = data});
  }
  
  onModification(l:Logement){
    this.logement = l;    
  }
  }


