import { Component, OnInit } from '@angular/core';
import { OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';

@Component({
  selector: 'blog-home',
  templateUrl: './blog-home.component.html',
  styleUrls: ['./blog-home.component.sass'],
})
export class BlogHomeComponent implements OnInit {

  slidesStore:any [] = [
    {
      id: 0 ,
      name: 'Título',
      img: 'https://cdn-mw.niceshops.com/upload/image/product/large/default/glascard-cuadro-de-cristal-paraiso-natural-453403-es.jpg',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum deserunt facere neque culpa magnam sit in quis aliquid aspernatur tenetur.'
    },
    {
      id: 1,
      name: 'Título',
      img: 'https://2.bp.blogspot.com/-8KuSaGEYEMs/UPSuL75AdoI/AAAAAAAAOLI/8Bb7HfkOQXU/s1600/nuevos+paisajes+floridos+con+carretera.jpg',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum deserunt facere neque culpa magnam sit in quis aliquid aspernatur tenetur.'
    },
    {
      id: 2 ,
      name: 'Título',
      img: 'https://www.viajejet.com/wp-content/viajes/Lago-Moraine-Parque-Nacional-Banff-Alberta-Canada-1440x810.jpg',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum deserunt facere neque culpa magnam sit in quis aliquid aspernatur tenetur.'
    },
    {
      id: 3,
      name: 'Título',
      img: 'https://static.vix.com/es/sites/default/files/styles/4x3/public/imj/p/paisajes-espectaculares-del-mundo-1.jpg',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum deserunt facere neque culpa magnam sit in quis aliquid aspernatur tenetur.'
    } 
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText : ['<div class="img_dch"><img class="img_arrow" src="../assets/images/home/arrow_purple.png" alt=""></div>','<div class="img_izq"><img class="img_arrow" src="../assets/images/home/arrow_purple.png" alt=""></div>'],
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 2
      },
      940: {
        items: 2
      }
    },
  }

  activeSlides: SlidesOutputData;

  getPassedData(data: SlidesOutputData) {
    this.activeSlides = data;
    console.log(this.activeSlides);
  }
}
