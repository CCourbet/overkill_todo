import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
    exports: [
        MatCardModule,
        MatListModule,
        MatToolbarModule
    ]
})
export class AppMaterialModule { }