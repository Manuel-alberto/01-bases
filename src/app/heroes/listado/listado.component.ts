import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
  //styleUrls: ['./listado.component.css']
})
export class ListadoComponent{

  heroes: string[] = ['Spiderman', 'Iron Man', 'Thor']
  heroe: string = '';

  borrarHeroe(){
    
    this.heroe =this.heroes.shift() || '';
  }

}
