import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroHomeComponent } from './components/home/hero-home/hero-home.component';
import { SomosHomeComponent } from './components/home/somos-home/somos-home.component';
import { DiagnosticHomeComponent } from './components/home/diagnostic-home/diagnostic-home.component';
import { SolutionsComponent } from './components/home/solutions/solutions.component';
import { DesignHomeComponent } from './components/home/design-home/design-home.component';
import { BannerTorringComponent } from './components/home/banner-torring/banner-torring.component';
import { BlogHomeComponent } from './components/home/blog-home/blog-home.component';
import { BannerIdeaHomeComponent } from './components/home/banner-idea-home/banner-idea-home.component';
import { FooterComponent } from './components/footer/footer.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { NavbarServicesComponent } from './components/servicios/navbar-services/navbar-services.component';
import { ServiceHomeComponent } from './components/servicios/service-home/service-home.component';
import { WebComponent } from './components/servicios/service-home/web/web.component';
import { ListservicesWebComponent } from './components/servicios/service-home/listservices-web/listservices-web.component';
import { ProcessWebComponent } from './components/servicios/service-home/process-web/process-web.component';
import { ServiceSoftwareComponent } from './components/servicios/service-software/service-software.component';
import { SoftwareComponent } from './components/servicios/service-software/software/software.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroHomeComponent,
    SomosHomeComponent,
    DiagnosticHomeComponent,
    SolutionsComponent,
    DesignHomeComponent,
    BannerTorringComponent,
    BlogHomeComponent,
    BannerIdeaHomeComponent,
    FooterComponent,
    HomeComponent,
    ServiciosComponent,
    NavbarServicesComponent,
    ServiceHomeComponent,
    WebComponent,
    ListservicesWebComponent,
    ProcessWebComponent,
    ServiceSoftwareComponent,
    SoftwareComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    CarouselModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
