import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductComponent } from './product/product.component';
import { ProductGridComponent } from './product-grid/product-grid.component';
import { PublishersComponent } from './publishers/publishers.component';
import { AuthoursComponent } from './authours/authours.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { CartComponent } from './cart/cart.component';
import { WizardTestComponent } from './wizard-test/wizard-test.component';
import {ArchwizardModule} from 'angular-archwizard';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PagenotfoundComponent,
    ProductComponent,
    ProductGridComponent,
    PublishersComponent,
    AuthoursComponent,
    CatalogueComponent,
    CartComponent,
    WizardTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ArchwizardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
