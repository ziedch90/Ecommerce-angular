import { Component } from '@angular/core';
import { Categories } from 'src/app/models/categories';
import { CategorieService } from 'src/app/services/categorie.service';
import { ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-modifcategorie',
  templateUrl: './modifcategorie.component.html',
  styleUrls: ['./modifcategorie.component.css']
})
export class ModifcategorieComponent {
categorie:Categories = new Categories()
idcat:object
constructor(private catserv:CategorieService, private route: ActivatedRoute , private router:Router ){}
ngOnInit() {
  this.route.params.subscribe(params => {
    this.idcat = params['id']

  });
  this.getcat()
}
getcat(){
  return this.catserv.getcategorie(this.idcat).subscribe(data=>
{
this.categorie=data
console.log(this.categorie)
}

  ),
  
  (error:any)=>console.log(error)
}

updateCategorie(id:object){
  this.catserv.UpdateCategorie(this.categorie,id ).subscribe(data=>this.router.navigate(['/lcategorie']))

}
    

}
