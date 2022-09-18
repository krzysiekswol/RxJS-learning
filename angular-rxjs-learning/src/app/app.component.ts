import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { concat, interval, merge, Observable, of } from 'rxjs';
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

  firstObs$ = of(1, 2, 3);
  secondObs$ = of(4, 5, 6);

  series1$ = interval(1000).pipe(map(val => val * 10));
  series2$ = interval(1000).pipe(map(val => val * 20));

  constructor(
    public restService: RestService,
  ) {}

  public ngOnInit(): void {

    const product$: Observable<Product> = this.restService.getData().pipe(map((data) => {
      data.price = data.price - (data.price * 0.3);
      return data
    }))

    product$.subscribe(response => console.log(response));

    
    
    
    // concatMap or concat it subscribe to next observable only if first completed.
    const thirdObs$ = concat(this.firstObs$, this.secondObs$);
    const resultSeries = merge(this.series1$, this.series2$);

    // thirdObs$.subscribe(val => console.log(val, 'concat'));
    // resultSeries.subscribe(res => console.log(res, 'merge'));
    
    

    //  this.restService.getData().subscribe(
    //   (val: Product) => console.log(val),
    //   (err: HttpErrorResponse) => console.log(err),
    //   () => console.log('completed')
    //  )
      
  }
}
