import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-part',
  templateUrl: './part.component.html',
  styleUrls: ['./part.component.css']
})

export class PartComponent implements OnInit {

  
  constructor(public color:string,public url:string) {
     this.color = color;
     this.url = url;
  }

  ngOnInit() {
    this.color = "Green";
    this.url = "https://cdn.rebrickable.com/media/parts/ldraw/288/3002.png";
  }

}
