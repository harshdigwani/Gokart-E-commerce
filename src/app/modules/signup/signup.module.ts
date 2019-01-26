import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpModule } from "@angular/http";
import { RouterModule,Routes } from "@angular/router";

import { SignupComponent } from "./components/signup/signup.component";
import { SignupService } from "./services/signup.service";

import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms'

export const routes:Routes = [
    {path:"signup",component:SignupComponent}
]
@NgModule({
    declarations:[SignupComponent],
    imports:[
        CommonModule,
        HttpModule,
        RouterModule.forRoot(routes),
        FormsModule,
        HttpClientModule,
        RouterModule,
        ReactiveFormsModule],
    providers:[SignupService],
    exports:[SignupComponent]
})
export class SignupModule{}