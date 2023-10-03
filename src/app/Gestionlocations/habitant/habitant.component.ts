import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Habitant } from 'src/app/model/habitant';
import { HabitantService } from 'src/app/service/habitant.service';


@Component({
  selector: 'app-habitant',
  templateUrl: './habitant.component.html',
  styleUrls: ['./habitant.component.css']
})
export class HabitantComponent implements OnInit {
  
  lesHabitants!:Habitant[];
  habitant : any;
 
  habitantForm : FormGroup= new FormGroup({})
 
  constructor(private habitantService:HabitantService,private fb:FormBuilder) { }


  ngOnInit(): void {
    this.habitantService.getHabitants().subscribe(data =>
      { 
          this.lesHabitants = data
       });

       
  }

  supprimer(id:number){
    this.habitantService.deleteHabitant(id).subscribe(
      data =>{ this.lesHabitants ;
        location.reload();
    })
  }



}
