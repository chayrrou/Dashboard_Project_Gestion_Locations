import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Habitant } from 'src/app/model/habitant';
import { HabitantService } from 'src/app/service/habitant.service';

@Component({
  selector: 'app-modifier-habitant',
  templateUrl: './modifier-habitant.component.html',
  styleUrls: ['./modifier-habitant.component.css']
})
export class ModifierHabitantComponent implements OnInit {
  habitantForm : FormGroup= new FormGroup({})
  habitant !: Habitant;
   idHabitant!:number
  constructor(private activatedRoute:ActivatedRoute,private habitantService:HabitantService,private fb:FormBuilder,private router:Router) { }

  ngOnInit(): void {
        this.habitantForm=this.fb.nonNullable.group({
      id:[''],
      nom: [''],
      prenom:[''],
      telephone:[''],
      mail:[''],
      profession:['']
  });

     this.idHabitant = this.activatedRoute.snapshot.params['id'];
    this.habitantService.getHabitantById(this.idHabitant).subscribe(data=>{
        this.habitantForm.setValue({
          id:data.id,
          nom: data.nom,
          prenom:data.prenom,
          telephone:data.telephone,
          mail:data.mail,
          profession:data.profession
        })
    })

  }


  onModifier(){
    
    console.log(this.habitantForm.value)
    this.habitantService.updateHabitant(this.idHabitant,this.habitantForm.value).subscribe(data=> 
      {
        this.router.navigate(['/habitant'])
          
      })
}

}
