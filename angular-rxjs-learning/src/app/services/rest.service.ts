import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  public readonly URL_LIMIT = 'https://fakestoreapi.com/products?limit=5'
  public readonly URL_SINGLE = 'https://fakestoreapi.com/products/1'

  constructor(
    private http: HttpClient
  ) { }

   public getData(): Observable<Product> {
    return this.http.get<Product>(this.URL_SINGLE);
   }
}
