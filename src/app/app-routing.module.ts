import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PagenotfoundComponent} from './pagenotfound/pagenotfound.component';
import {ProductComponent} from './product/product.component';
import {ProductGridComponent} from './product-grid/product-grid.component';
import {AuthoursComponent} from './authours/authours.component';
import {PublishersComponent} from './publishers/publishers.component';
import {CartComponent} from './cart/cart.component';
import {CatalogueComponent} from './catalogue/catalogue.component';
import {WizardTestComponent} from './wizard-test/wizard-test.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'authors', component: AuthoursComponent},
  {path: 'cart', component: CartComponent},
  {path: 'catalogue', component: CatalogueComponent},
  {path: 'home', component: HomeComponent},
  {path: 'pagenotfound', component: PagenotfoundComponent},
  {path: 'product', component: ProductComponent},
  {path: 'productgrid', component: ProductGridComponent},
  {path: 'publishers', component: PublishersComponent},
  {path: 'wizardtest', component: WizardTestComponent}

  // {path: '', component:}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
