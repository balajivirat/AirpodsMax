import { HostListener } from '@angular/core';
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
  export class AppComponent implements OnInit {
    title = 'AirpodsMax';

    constructor() { }
  
    ngOnInit(): void {
      this.slider();
      this.sliders();

    }

  value = 1;
  @HostListener('window:scroll', ['$event']) 
  scrollHandler(event:any) {
    let content = document.getElementById("content")!;
    let images = content.getElementsByTagName("img");
    if (event.timeStamp < 11242.199999999255) {
      images[0].style.transform = "scale(1." + this.value +")";
      this.value ++;
    }else if (event.timeStamp > 11242.199999999255) {
      images[0].style.transform = "scale(1." + this.value +")";
      this.value --;
    }
    if (this.value > 5 || this.value < 1) {
      this.value = 1;
    }
  }
  indexValue = 1;
  slider(){
    var headphn = document.getElementById("headphn-img")!,
    images = headphn.getElementsByTagName("img");
   for (let index = 0; index < images.length; index++) {
     images[index].style.display = "none"; 
   }
   this.indexValue++;
   if (this.indexValue > images.length) {
    this.indexValue = 1;
   }
   images[this.indexValue -1].style.display = "block";
   setTimeout(() => {
     this.slider();
   }, 3000);
  }


  indexValues = 1;
  sliders(){
    var headphn = document.getElementById("headphn-content")!,
    images = headphn.getElementsByTagName("img");
   for (let index = 0; index < images.length; index++) {
     images[index].style.display = "none"; 
   }
   this.indexValues++;
   if (this.indexValues > images.length) {
    this.indexValues = 1;
   }
   images[this.indexValues -1].style.display = "block";
   setTimeout(() => {
     this.sliders();
   }, 3000);
  }
  
}
