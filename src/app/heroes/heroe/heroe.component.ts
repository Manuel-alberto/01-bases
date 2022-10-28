import { Component } from "@angular/core";
import { RouteReuseStrategy } from "@angular/router";

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'

})
export class HeroeComponent{
    nombre: string = 'Iron man';
    edad: number = 45;

    obtenerNombre(): string{
        return `${this.nombre} - ${this.edad}`;
    }

    get nombreCapitalizado(): string{
        return this.nombre.toUpperCase();
    }

    cambiarNombre(): void{
        this.nombre = 'Spiderman';
    }

    cambiarEdad(): void{
        this.edad = 30;
    }

}