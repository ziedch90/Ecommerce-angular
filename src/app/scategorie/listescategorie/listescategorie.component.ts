import { Component } from '@angular/core';
import { Scategorie } from 'src/app/models/scategorie';
import { ScategorieService } from 'src/app/services/scategorie.service';
@Component({
  selector: 'app-listescategorie',
  templateUrl: './listescategorie.component.html',
  styleUrls: ['./listescategorie.component.css']
})
export class ListescategorieComponent {
  scategorie:Scategorie[]
  constructor(private scatserv:ScategorieService){}
  ngOnInit(){
    this.Listscat();
  }
  Listscat(){
    return this.scatserv.getscategorie().subscribe(data=>
      this.scategorie=data),
      (error:any)=>console.log(error)
      
  }
  suppscategorie(id:object){
    return this.scatserv.Deletescategorie(id).subscribe(data=>{this.Listscat()});
  }
}
