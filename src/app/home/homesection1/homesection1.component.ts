import { Component } from '@angular/core';

@Component({
  selector: 'app-homesection1',
  templateUrl: './homesection1.component.html',
  styleUrls: ['./homesection1.component.css']
})
export class Homesection1Component {
  image1 = 'show';
  image2 = 'hide';
  image3 = 'hide';
  constructor(){
    this.image1 = 'show';
    this.image2 = 'hide';
    this.image3 = 'hide'
  }
  hoverEffect(m : number){
    if(m === 1){
      this.image1 = 'show';
      this.image2 = 'hide';
      this.image3 = 'hide';
    }
    else if(m === 2){
      this.image1 = 'hide';
      this.image2 = 'show';
      this.image3 = 'hide';
    }
    else{
      this.image1 = 'hide';
      this.image2 = 'hide';
      this.image3 = 'show';
    }
  }
}
