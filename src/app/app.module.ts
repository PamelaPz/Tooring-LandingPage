import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroHomeComponent } from './components/hero-home/hero-home.component';
import { SomosHomeComponent } from './components/somos-home/somos-home.component';
import { DiagnosticHomeComponent } from './components/diagnostic-home/diagnostic-home.component';
import { SolutionsComponent } from './components/solutions/solutions.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroHomeComponent,
    SomosHomeComponent,
    DiagnosticHomeComponent,
    SolutionsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
