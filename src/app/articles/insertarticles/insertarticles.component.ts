import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Articles } from 'src/app/models/articles';
import { Scategorie } from 'src/app/models/scategorie';
import { ArticlesService } from 'src/app/services/articles.service';
import { ScategorieService } from 'src/app/services/scategorie.service';
@Component({
  selector: 'app-insertarticles',
  templateUrl: './insertarticles.component.html',
  styleUrls: ['./insertarticles.component.css']
})
export class InsertarticlesComponent {
  article :Articles = new Articles()
  scategorie:Scategorie []
  constructor(private artserv:ArticlesService ,private router:Router, private scatserv:ScategorieService){}
  ngOnInit(){
    this.loadscategorie()
  }
  loadscategorie(){return this.scatserv.getscategorie().subscribe(data=>
    {
      console.log(data)
      this.scategorie=data
    }

  ),
  (error:any)=>console.log(error)
}

  ajoutarticle=()=>{
    this.artserv.Addarticle(this.article).subscribe(data=>this.router.navigate(['/larticles']))
  }

}
