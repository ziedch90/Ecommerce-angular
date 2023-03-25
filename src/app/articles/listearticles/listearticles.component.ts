import { Component } from '@angular/core';
import { Articles } from 'src/app/models/articles';
import { ArticlesService } from 'src/app/services/articles.service';
@Component({
  selector: 'app-listearticles',
  templateUrl: './listearticles.component.html',
  styleUrls: ['./listearticles.component.css']
})
export class ListearticlesComponent {
  articles:Articles[]
  constructor(private artserv:ArticlesService){}
ngOnInit(){
this.Listart();
}
Listart(){
  return this.artserv.getarticles().subscribe(data=>
    {
      console.log(data)
      this.articles=data
    }

  ),
  (error:any)=>console.log(error)
}
  
    

supparticle(id:object){
  return this.artserv.Deletearticle(id).subscribe(data=>{this.Listart()});
}
}

