import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroHomeComponent } from './components/hero-home/hero-home.component';
import { SomosHomeComponent } from './components/somos-home/somos-home.component';
import { DiagnosticHomeComponent } from './components/diagnostic-home/diagnostic-home.component';
import { SolutionsComponent } from './components/solutions/solutions.component';
import { DesignHomeComponent } from './components/design-home/design-home.component';
import { BannerTorringComponent } from './components/banner-torring/banner-torring.component';
import { BlogHomeComponent } from './components/blog-home/blog-home.component';
import { BannerIdeaHomeComponent } from './components/banner-idea-home/banner-idea-home.component';

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
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FontAwesomeModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
