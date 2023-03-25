import { Component } from '@angular/core';
import { Categories } from 'src/app/models/categories';
import { CategorieService } from 'src/app/services/categorie.service';
@Component({
  selector: 'app-listecategories',
  templateUrl: './listecategories.component.html',
  styleUrls: ['./listecategories.component.css']
})
export class ListecategoriesComponent {
  categories:Categories[]
  constructor(private catserv:CategorieService){}
  ngOnInit() {
    this.Listcat();
  }
  Listcat(){return this.catserv.ListCategories().subscribe(data=>
    {
      console.log(data)
      this.categories = data
    }
  ),
    (err:any)=>console.log(err)
  }
  suppcategorie(id:object){
    return this.catserv.Deletecategorie(id).subscribe(data=>{this.Listcat()});
  }
  }
    
 

