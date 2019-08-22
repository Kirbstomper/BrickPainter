import { Component, OnInit, Injectable } from '@angular/core';
import {PartComponent} from "../part/part.component";
import {BrickService, RespModel}  from "./BrickService";
import { HttpClient, HttpHandler } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-part-list',
  templateUrl: './part-list.component.html',
  styleUrls: ['./part-list.component.css']
})


/***
 * This will be the list displayed after a search. for a brick. Show all colours that the brick comes in
 */

export class PartListComponent implements OnInit {
  
    //Mock data from API call
    parts = [];
    data = [
      {
        "color_id": -1,
        "color_name": "[Unknown]",
        "num_sets": 0,
        "num_set_parts": 0,
        "part_img_url": "https://cdn.rebrickable.com/media/parts/ldraw/-1/3002.png",
        "elements": [
          "300226"
        ]
      },
      {
        "color_id": 0,
        "color_name": "Red",
        "num_sets": 517,
        "num_set_parts": 1853,
        "part_img_url": "https://cdn.rebrickable.com/media/parts/elements/300226.jpg",
        "elements": [
          "300226"
        ]
      },
      {
        "color_id": 1,
        "color_name": "Blue",
        "num_sets": 425,
        "num_set_parts": 2205,
        "part_img_url": "https://cdn.rebrickable.com/media/parts/elements/300223.jpg",
        "elements": [
          "300223"
        ]
      },
      {
        "color_id": 2,
        "color_name": "Green",
        "num_sets": 175,
        "num_set_parts": 755,
        "part_img_url": "https://cdn.rebrickable.com/media/parts/elements/4109674.jpg",
        "elements": [
          "4109674"
        ]
      },
      {
        "color_id": 3,
        "color_name": "Dark Turquoise",
        "num_sets": 0,
        "num_set_parts": 0,
        "part_img_url": "https://cdn.rebrickable.com/media/parts/ldraw/3/3002.png",
        "elements": []
      },
      {
        "color_id": 4,
        "color_name": "Red",
        "num_sets": 513,
        "num_set_parts": 2392,
        "part_img_url": "https://cdn.rebrickable.com/media/parts/elements/300221.jpg",
        "elements": [
          "300221"
        ]
      }];
    

  constructor(private brickService:BrickService ) {}
  
  onBrickSelect(part_num:string){
    //Make API call to get parts list
   this.brickService.getColorsForPart(part_num).subscribe((res)=>{
     console.log(res.count);
     var service_parts = [];
     res.results.forEach(p=> {
      if(p.num_sets> 0){
      console.log("Added!");
        service_parts.push(p);
      }
    });
    this.parts = service_parts;
   });
   
  }
  ngOnInit() {
    this.parts = [];
  }

}
