import { Injectable } from "@angular/core";

import { Http, Response } from "@angular/http";
import { map } from "rxjs/operators";
import { Observable } from "rxjs/Observable";

import { Album } from "./album";
import { Product } from "./product";

@Injectable()
export class ProductService {
  private _albumUrl = "../assets/album.json";
  private _productsUrl = "../assets/products.json";

  constructor(private _http: Http) {}

  getAlbum(id: number): Observable<Album> {
    return this._http
      .get(this._albumUrl)
      .pipe(map((response) => response.json() as Album));
  }

  getProducts(): Observable<Product[]> {
    return this._http
      .get(this._productsUrl)
      .pipe(map((response) => response.json() as Product[]));
  }
}
