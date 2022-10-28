import { CommonModule } from "@angular/common";
import { contadorComponent } from './contador/contador.component';
import {NgModule} from"@angular/core";

@NgModule({
    declarations: [
        contadorComponent
    ],
    exports: [
        contadorComponent
    ]
})

export class contadorModule{

}