import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './products/products.component';
import { ServicesComponent } from './services/services.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { PhomeComponent } from './products/phome/phome.component';
import { SoftwareComponent } from './products/software/software.component';
import { HardwareComponent } from './products/hardware/hardware.component';
import { HomeComponent } from './home/home.component';
import { WebdevComponent } from './services/webdev/webdev.component';
import { MobiledevComponent } from './services/mobiledev/mobiledev.component';
import { ClouddevComponent } from './services/clouddev/clouddev.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    ServicesComponent,
    AboutusComponent,
    PhomeComponent,
    SoftwareComponent,
    HardwareComponent,
    ClouddevComponent,
    WebdevComponent,
    MobiledevComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'products',
        component: ProductsComponent,
        children: [
          {
            path: '',
            component: PhomeComponent
          },
          {
            path: 'software',
            component: SoftwareComponent
          },
          {
            path: 'hardware',
            component: HardwareComponent
          }
        ]
      },
      {
        path: 'services',
        component: ServicesComponent,
        children: [
          {
            path: 'webdev',
            component: WebdevComponent
          },
          {
            path: 'mobiledev',
            component: MobiledevComponent,
          },
          {
            path: 'clouddev',
            component: ClouddevComponent
          }
        ]

      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
