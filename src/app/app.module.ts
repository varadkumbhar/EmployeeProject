import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeCrudComponent } from './employee-crud/employee-crud.component';
import { MorelessComponent } from "./Widgets/moreless/moreless.component";

@NgModule({
    declarations: [
        AppComponent,
        EmployeeCrudComponent,
        MorelessComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,

    ]
})
export class AppModule { }
