import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Scategorie } from 'src/app/models/scategorie';
import { ScategorieService } from 'src/app/services/scategorie.service';
@Component({
  selector: 'app-insertscategorie',
  templateUrl: './insertscategorie.component.html',
  styleUrls: ['./insertscategorie.component.css']
})
export class InsertscategorieComponent {
  scategorie:Scategorie = new Scategorie()
  constructor(private scatserv:ScategorieService ,private router:Router){}
  ajoutscategorie=()=>{
    this.scatserv.Addscategorie(this.scategorie).subscribe(data=>this.router.navigate(['/lscategorie']))
  }
}
