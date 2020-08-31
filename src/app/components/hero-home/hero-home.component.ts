import { Component, OnInit } from '@angular/core';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
// import * as $ from 'jquery';

@Component({
  selector: 'hero-home',
  templateUrl: './hero-home.component.html',
  styleUrls: ['./hero-home.component.sass']
})
export class HeroHomeComponent implements OnInit{
  ngOnInit() {
  }

  ChevronDown = faChevronDown;

}
