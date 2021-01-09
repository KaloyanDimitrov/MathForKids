import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  images = ['./assets/1.jpeg', './assets/2.jpeg', './assets/3.jpeg'];
  selectedImageIndex = 0;
  constructor() { }

  ngOnInit() {
  }

  previousImage() {
    if (this.selectedImageIndex === 0) {
      this.selectedImageIndex = this.images.length - 1;
    } else {
      this.selectedImageIndex--;
    }
  }

  nextImage() {
    if ((this.images.length - 1) === this.selectedImageIndex) {
      this.selectedImageIndex = 0;
    } else {
      this.selectedImageIndex++;
    }
  }

}
