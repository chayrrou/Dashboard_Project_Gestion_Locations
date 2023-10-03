import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Logement } from 'src/app/model/logement';
import { LogementService } from 'src/app/service/logement.service';

@Component({
  selector: 'app-selected-logement',
  templateUrl: './selected-logement.component.html',
  styleUrls: ['./selected-logement.component.css']
})
export class SelectedLogementComponent implements OnInit {
  
  @Input() logement!:Logement;
  @Input() index!:number;

  @Output() notify = new EventEmitter<number>();

  constructor(private logementService : LogementService) { }

  ngOnInit(): void {
   
  }

  supprimer(id:number){
    this.logementService.deleteLogement(id).subscribe(
      ()=>this.notify.emit(id)
    )
  }

}
