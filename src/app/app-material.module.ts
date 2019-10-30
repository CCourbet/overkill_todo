import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
    exports: [
        MatCardModule,
        MatListModule,
        MatToolbarModule
    ]
})
export class AppMaterialModule { }