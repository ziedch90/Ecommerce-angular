import { Component } from '@angular/core';
import { Articles } from 'src/app/models/articles';
import { ArticlesService } from 'src/app/services/articles.service';
import { CategorieService } from 'src/app/services/categorie.service';
import { Categories } from 'src/app/models/categories';
@Component({
  selector: 'app-listearticletable',
  templateUrl: './listearticletable.component.html',
  styleUrls: ['./listearticletable.component.css']
})
export class ListearticletableComponent {
  articles:Articles[]
  categories:Categories[];
term: string;
  constructor(private artserv:ArticlesService, private catserv:CategorieService){}

ngOnInit(){
this.loadArticles();
this.loadCategories();
}
loadArticles(){
  return this.artserv.getarticles().subscribe(data=>
    {
      console.log(data)
      this.articles=data
    }

  ),
  (error:any)=>console.log(error)
}
loadCategories(){
  return this.catserv.ListCategories().subscribe(data=>
    {
      console.log(data)
      this.categories=data
    }
    ),

  (err:any)=>console.log(err)
  }

supparticle(id:object){
  return this.artserv.Deletearticle(id).subscribe(data=>{this.loadArticles()});
}
}
