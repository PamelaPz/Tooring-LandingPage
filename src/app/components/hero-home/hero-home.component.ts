import { Component } from '@angular/core';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'hero-home',
  templateUrl: './hero-home.component.html',
  styleUrls: ['./hero-home.component.sass']
})
export class HeroHomeComponent {

  ChevronDown = faChevronDown;

}
