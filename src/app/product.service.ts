import { Injectable } from '@angular/core';
import { Http, Response} from "@angular/http";
import { Map} from "rxjs/util/Map";

@Injectable()
export class ProductService {

  _albumUrl: string = "./assets/album.json";

  constructor(private _http: Http) { }

  getAlbum(id:number) : any {
    return this._http.get(this._albumUrl)
      .subscribe(
        response => response.json()
          .map(x => x.toString()));
  }

}
