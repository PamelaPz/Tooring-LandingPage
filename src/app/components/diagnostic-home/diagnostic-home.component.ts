import { Component, OnInit } from '@angular/core';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'diagnostic-home',
  templateUrl: './diagnostic-home.component.html',
  styleUrls: ['./diagnostic-home.component.sass']
})
export class DiagnosticHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ChevronDown = faChevronDown;

}
