import { Component } from '@angular/core';
import { Categories } from 'src/app/models/categories';
import { CategorieService } from 'src/app/services/categorie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insertcategorie',
  templateUrl: './insertcategorie.component.html',
  styleUrls: ['./insertcategorie.component.css']
})
export class InsertcategorieComponent {
  categorie:Categories = new Categories()
  constructor(private catserv:CategorieService ,private router:Router){}
  ajoutcategorie=()=>{
    this.catserv.Addcategorie(this.categorie).subscribe(data=>this.router.navigate(['/lcategorie']))
  }
}
