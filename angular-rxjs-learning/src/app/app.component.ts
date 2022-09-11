import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from './model/product';
import { RestService } from './services/rest.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-rxjs-learning';

  

  constructor(
    public restService: RestService,
  ) {}

  public ngOnInit(): void {

    const product$: Observable<Product> = this.restService.getData().pipe(map((data) => {
      data.price = data.price - (data.price * 0.3);
      return data
    }))

    product$.subscribe(response => console.log(response))

    //  this.restService.getData().subscribe(
    //   (val: Product) => console.log(val),
    //   (err: HttpErrorResponse) => console.log(err),
    //   () => console.log('completed')
    //  )
      
  }
}
