import { Component, OnInit } from '@angular/core';
import { BrickService } from './BrickService';
import { ColorList } from './color-list';

@Component({
  selector: 'app-part-list',
  templateUrl: './part-list.component.html',
  styleUrls: ['./part-list.component.css']
})


/***
 * This will be the list displayed after a search. for a brick. Show all colours that the brick comes in
 */

export class PartListComponent implements OnInit {

  constructor(private brickService: BrickService) { }

  colorA: string;
  colorB: string;
  partNumber: string;
  isLoading: boolean;
  parts: any[];
  color_options: any[] = new ColorList().colors;

  // Mock Data
  data = [
    {
      color_id: -1,
      color_name: '[Unknown]',
      num_sets: 0,
      num_set_parts: 0,
      part_img_url: 'https://cdn.rebrickable.com/media/parts/ldraw/-1/3002.png',
      elements: [
        '300226'
      ]
    },
    {
      color_id: 0,
      color_name: 'Red',
      num_sets: 517,
      num_set_parts: 1853,
      part_img_url: 'https://cdn.rebrickable.com/media/parts/elements/300226.jpg',
      elements: [
        '300226'
      ]
    },
    {
      color_id: 1,
      color_name: 'Blue',
      num_sets: 425,
      num_set_parts: 2205,
      part_img_url: 'https://cdn.rebrickable.com/media/parts/elements/300223.jpg',
      elements: [
        '300223'
      ]
    },
    {
      color_id: 2,
      color_name: 'Green',
      num_sets: 175,
      num_set_parts: 755,
      part_img_url: 'https://cdn.rebrickable.com/media/parts/elements/4109674.jpg',
      elements: [
        '4109674'
      ]
    },
    {
      color_id: 3,
      color_name: 'Dark Turquoise',
      num_sets: 0,
      num_set_parts: 0,
      part_img_url: 'https://cdn.rebrickable.com/media/parts/ldraw/3/3002.png',
      elements: []
    },
    {
      color_id: 4,
      color_name: 'Red',
      num_sets: 513,
      num_set_parts: 2392,
      part_img_url: 'https://cdn.rebrickable.com/media/parts/elements/300221.jpg',
      elements: [
        '300221'
      ]
    }];


  // TODO: Refactor this, its a bit messy @_@
  onBrickSelect(set_num: string, color_a: string, color_b: string) {
    // Set loading boolean for search status
    this.isLoading = true;
    // Make API call to get parts and all parts of that colour
    this.parts = []; // Empty parts list
    const part_query = '';
    this.brickService.getPartsListForSet(set_num).subscribe((res) => {
      res.results.forEach(set_part => {
        if (set_part.color.name === color_a) {
          // Make call to get colors for this part
          this.brickService.getColorsForPart(set_part.part.part_num).subscribe((color_res) => {
            color_res.results.forEach(part => {
              if (part.color_name === color_b && (part.num_set_parts > 0)) {
                this.parts.push(part);
              }
            });
            this.isLoading = false;
          });
        }
      });

    });



  }
  ngOnInit() {
    this.parts = [];
    this.isLoading = false;
  }

}
