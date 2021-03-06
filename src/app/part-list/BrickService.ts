import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';
import { ConfigService } from './config.service';
import {HttpClient} from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';



const httpOptions = {
  headers: new HttpHeaders({
    Accept: 'application/json',
    'Content-Type':  'application/json'
  })
};

const url = environment.serviceUrl; // Change for whatever URL you plan on hosting with

export class PartRespModel {
  count: number;
  next: any;
  previous: any;
  results: PartListModel[];
}

export class PartListModel {
  color_id: number;
  color_name: string;
  num_sets: number;
  num_set_parts: number;
  part_img_url: string;
  elements: string[];
}

export class SetListRespModel {
  count: number;
  next: any;
  pervious: any;
  results: SetListPartModel[];
}

export class SetListPartModel {
  id: number;
  part: PartModel;
  color: ColorModel;
}

export class PartModel {
  part_num: string;
}
export class ColorModel {
  id: number;
  name: string;
}
@Injectable()
export class BrickService {

    public getColorsForPart(part_num: string): Observable<PartRespModel> {

      return this.http.post<PartRespModel>(url + '/api/getColorsForPart', {part: part_num}, {
         headers: httpOptions.headers
       });
    }


    public getPartsListForSet(set_num: string): Observable<SetListRespModel> {
      return this.http.post<SetListRespModel>(url + '/api/getPartsListForSet', {set: set_num}, {
         headers: httpOptions.headers
       });
    }

    constructor(private http: HttpClient) { }
}
