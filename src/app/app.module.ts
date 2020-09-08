import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { APP_ROUTING } from './app.routes';

import { AppComponent } from './app.component';
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
  ],
  imports: [
    BrowserModule,
    NgbModule,
    CarouselModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
