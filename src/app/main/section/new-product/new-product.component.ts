import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

declare var Swiper: any; // Declare Swiper as a global variable

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements AfterViewInit  {
  @ViewChild('swiperContainer') swiperContainer!: ElementRef;
  @ViewChild('swiperContainer2') swiperContainer2!: ElementRef;

  ngAfterViewInit(): void {
    const swiper1 = new Swiper(this.swiperContainer.nativeElement, {
      // Swiper configuration options
      spaceBetween: 30,
      slidesPerView: 'auto',
      loop: false,
      scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
        hide: false,
      }
    });
    
    const swiper2 = new Swiper(this.swiperContainer2.nativeElement, {
      // Swiper configuration options
      spaceBetween: 30,
      slidesPerView: 'auto',
      loop: false,
      scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
        hide: false,
      }
    });
  }
}
