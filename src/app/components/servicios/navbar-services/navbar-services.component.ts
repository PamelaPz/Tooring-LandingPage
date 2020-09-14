import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'navbar-services',
  templateUrl: './navbar-services.component.html',
  styleUrls: ['./navbar-services.component.sass']
})
export class NavbarServicesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function(){
      //Creamos un evento click para el enlace
      $(".ancla").click(function(evento){
        //Anulamos la funcionalidad por defecto del evento
        evento.preventDefault();
        //Creamos el string del enlace ancla
        var codigo = "#" + $(this).data("ancla");

        if (codigo == "#footer") {
          //Funcionalidad de scroll lento para el enlace ancla en 3 segundos
          $("html,body").animate({scrollTop: $(codigo).offset().top}, 2000);
        } else {
          //Funcionalidad de scroll lento para el enlace ancla en 3 segundos
          $("html,body").animate({scrollTop: $(codigo).offset().top-30}, 2000);
        }
      });
    });
  }

}
