import { Component } from '@angular/core';
import { Articles } from 'src/app/models/articles';
import { ArticlesService } from 'src/app/services/articles.service';
@Component({
  selector: 'app-listarticlescard',
  templateUrl: './listarticlescard.component.html',
  styleUrls: ['./listarticlescard.component.css']
})
export class ListarticlescardComponent {
  articles:Articles[]
  constructor(private artserv:ArticlesService){}
ngOnInit(){



  return this.artserv.getarticles().subscribe(data=>
    this.articles=data),
    (error:any)=>console.log(error)
    
  }}
