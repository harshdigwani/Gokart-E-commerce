import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpModule } from "@angular/http";
import { RouterModule,Routes } from "@angular/router";

import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms'

import { LoginComponent } from "./components/login/login.component";
import { LoginService } from "./services/login.service";

export const routes:Routes = [
    {path:"login",component:LoginComponent}
]
@NgModule({
    declarations:[LoginComponent],
    imports:[
        CommonModule,
        HttpModule,
        RouterModule.forRoot(routes),
        FormsModule,
        HttpClientModule,
        RouterModule,
        ReactiveFormsModule],
    providers:[LoginService],
    exports:[LoginComponent]
})
export class LoginModule{}
