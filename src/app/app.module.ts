import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './layout/login/login.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { TopbarComponent } from './layout/topbar/topbar.component';
import { PagesComponent } from './pages/pages.component';
import { CustomerComponent } from './pages/customer/customer.component';
import { ProductsComponent } from './pages/products/products.component';
import { DetailsComponent } from './pages/customer/details/details.component';
import { FormsComponent } from './pages/customer/forms/forms.component';
import { TableComponent } from './pages/customer/table/table.component';
import { TablesComponent } from './pages/products/tables/tables.component';
import { HeroesComponent } from './heroes/heroes.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    LoginComponent,
    SidebarComponent,
    TopbarComponent,
    PagesComponent,
    CustomerComponent,
    ProductsComponent,
    DetailsComponent,
    FormsComponent,
    TableComponent,
    TablesComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
