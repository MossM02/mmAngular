import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {
  product: { id: number, name: string };
  paramsSubscription: Subscription;

  // ActivatedRoute Object should give access to the product id passed in URL = selected product
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.product = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name'],
    };
    this.paramsSubscription = this.route.params
    .subscribe(
      (params: Params) => {
        this.product.id = params['id'];
        this.product.name = params['name'];
        // updates the object whenever the parameter changes
      }
    )
  }

  // subscription memomory stays even though component is destroyed (automatically handled by Angular)
  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }

}
