import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-part',
  templateUrl: './part.component.html',
  styleUrls: ['./part.component.css']
})
export class PartComponent implements OnInit {

  color = "Green";
  url ="https://cdn.rebrickable.com/media/parts/elements/4109674.jpg";
  constructor(color, url) {
     this.color = color;
     this.url = url;
  }

  ngOnInit() {
  }

}
