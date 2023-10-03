import { Component,  OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Logement } from 'src/app/model/logement';
import { LogementService } from 'src/app/service/logement.service';


@Component({
  selector: 'app-logement',
  templateUrl: './logement.component.html',
  styleUrls: ['./logement.component.css']
})
export class LogementComponent implements OnInit {
  
  lesLogements!: Logement[];

  constructor(private logementService : LogementService,private router:Router) { }

  ngOnInit(): void {
    this.logementService.getLogements()
    .subscribe(
      data => this.lesLogements = data)
      
  }

  supprimer(id:number){
    this.logementService.deleteLogement(id).subscribe(
      data =>{ this.lesLogements ;
        location.reload();
  })

  }

  onSuppression(id:Number){
    this.lesLogements = this.lesLogements.filter(e => e.id !=id)  }
  
  
}
