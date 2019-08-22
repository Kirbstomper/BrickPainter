import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';
import { ConfigService } from './config.service';
import {HttpClient} from '@angular/common/http'
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';



const httpOptions = {
  headers: new HttpHeaders({
    "Accept": "application/json",
    'Content-Type':  'application/json',
    'Authorization': '7782c76c8e367386bf510998fad6fe50'
  })
};

export class RespModel{
  count:number;
  next:any;
  previous:any;
  results:PartListModel[];
}

export class PartListModel{
  color_id:number;
  color_name:string;
  num_sets:number;
  num_set_parts: number;
  part_img_url: string;
  elements:string[];
}
@Injectable()
export class BrickService{

    public getColorsForPart(part_num:string):Observable<RespModel>{
       
      return this.http.get<RespModel>("https://rebrickable.com/api/v3/lego/parts/"+part_num+"/colors/?key=7782c76c8e367386bf510998fad6fe50",{
         headers:httpOptions.headers
       });
    }

    constructor(private http: HttpClient) { }
}