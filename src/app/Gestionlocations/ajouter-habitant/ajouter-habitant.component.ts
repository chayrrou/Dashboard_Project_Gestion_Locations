import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Habitant } from 'src/app/model/habitant';
import { HabitantService } from 'src/app/service/habitant.service';

@Component({
  selector: 'app-ajouter-habitant',
  templateUrl: './ajouter-habitant.component.html',
  styleUrls: ['./ajouter-habitant.component.css']
})
export class AjouterHabitantComponent implements OnInit {

  habitant!:Habitant[];
  habitantForm !: FormGroup;
  
  constructor(private fb:FormBuilder,private habitantService:HabitantService,private router:Router) { }

  ngOnInit(): void {
    this.habitantService.getHabitants().subscribe(data =>
      { 
        this.habitant = data;
     });

     this.habitantForm = this.fb.nonNullable.group({
        id:[''],
        nom: [''],
        prenom:[''],
        telephone:['0000000'],
        mail:[''],
        profession:['']
      });
  }

  addLogement(){
    this.habitantService.addHabitant(this.habitantForm.value).subscribe(
      data => {      
       
        console.log('Habitant saved successfully!');
        this.router.navigate(['/habitant']);
    })
  }
  annuler(){
    this.habitantForm.reset();
  }

  


}
