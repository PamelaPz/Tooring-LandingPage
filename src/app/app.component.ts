import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    $(document).ready(function(){
      //Creamos un evento click para el enlace
      $(".ancla").click(function(evento){
        //Anulamos la funcionalidad por defecto del evento
        evento.preventDefault();
        //Creamos el string del enlace ancla
        var codigo = "#" + $(this).data("ancla");
        //Funcionalidad de scroll lento para el enlace ancla en 3 segundos
        $("html,body").animate({scrollTop: $(codigo).offset().top-40}, 2000);
      });
    });
  }

  title = 'Tooring-LandingPage';
}
