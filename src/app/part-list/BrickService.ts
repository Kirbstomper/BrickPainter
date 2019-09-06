import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';
import { ConfigService } from './config.service';
import {HttpClient} from '@angular/common/http'
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';



const httpOptions = {
  headers: new HttpHeaders({
    "Accept": "application/json",
    'Content-Type':  'application/json'
  })
};

export class PartRespModel{
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

export class SetListRespModel{
  count:number;
  next:any;
  pervious:any;
  results:SetListPartModel[];
}

export class SetListPartModel{
  id: number;
  part: PartModel;
  color: ColorModel;
}

export class PartModel{
  part_num:string;
}
export class ColorModel{
  id:number;
  name:string;
}
@Injectable()
export class BrickService{

    public getColorsForPart(part_num:string):Observable<PartRespModel>{
       
      return this.http.post<PartRespModel>("http://localhost:8080/api/getColorsForPart",{"part":part_num},{
         headers:httpOptions.headers
       });
    }


    public getPartsListForSet(set_num:string):Observable<SetListRespModel>{
      return this.http.post<SetListRespModel>("http://localhost:8080/api/getPartsListForSet",{"set":set_num},{
         headers:httpOptions.headers
       });
    }

    constructor(private http: HttpClient) { }
}