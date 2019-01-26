import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './modules/index/components/header/header.component'
import { FooterComponent } from './modules/index/components/footer/footer.component'

import { FormsModule } from '@angular/forms'
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http'
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms'

//Old
// import { ProductsModule } from './modules/products-module/products.module'
// import { SubCategoriesModule } from './modules/subCategories-module/subCategories.module';

//NEW
import { LoginModule } from './modules/login/login.module'
import { SignupModule } from './modules/signup/signup.module'
import { CategoriesModule } from './modules/categories/categories.module'
import { FilterModule } from './modules/filter/filter.module';
import { ProductModule } from './modules/product/product.module'
import { SearchModule } from './modules/search/search.module';
import { AddressModule } from './modules/address/address.module'
import { MyactivityModule } from './modules/myactivity/myactivity.module';
import { AccountModule } from './modules/account/account.module'
import { IndexModule } from './modules/index/index.module';
import { MerchentModule } from './modules/merchent/merchent.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    //Modules According to Functionality
    CategoriesModule,
    FilterModule,
    ProductModule,
    SearchModule,
    SignupModule,
    LoginModule,
    AddressModule,
    MyactivityModule,
    AccountModule,
    IndexModule,
    //Merchent module
    MerchentModule
  ],
  providers: [],
  bootstrap: [AppComponent,HeaderComponent,FooterComponent]
})
export class AppModule { }
