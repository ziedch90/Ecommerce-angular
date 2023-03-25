import { Component } from '@angular/core';
import { Articles } from 'src/app/models/articles';
import { ArticlesService } from 'src/app/services/articles.service';
import { ActivatedRoute,Router} from '@angular/router';


@Component({
  selector: 'app-modifarticles',
  templateUrl: './modifarticles.component.html',
  styleUrls: ['./modifarticles.component.css']
})
export class ModifarticlesComponent {
  article:Articles = new Articles()
  idArt: object
  constructor(private artserv:ArticlesService , private route: ActivatedRoute , private router:Router){}
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.idArt = params['id']

    });
    this.getart()
  }

  getart(){
    return this.artserv.getarticle(this.idArt).subscribe(data=>
{
  this.article=data
  console.log(this.article)
}

    ),
    
    (error:any)=>console.log(error)
  }

  updatearticle(id:object){
    this.artserv.updatearticle(this.article,id).subscribe(data=>this.router.navigate(['/larticles']))

  }
      

}
