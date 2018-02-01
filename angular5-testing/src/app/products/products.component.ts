import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductsService} from '../products.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {
  productName = 'A book';
  isDisabled = false;
  products = [];
  private productSubscription: Subscription;

  constructor(private productService: ProductsService) {
    setTimeout(() => {
      this.isDisabled = true;
    } , 3000);
  }

  ngOnInit() {
    this.products = this.productService.getProducts();
   this.productSubscription = this.productService.productsUpdated.subscribe(() => {
      this.products = this.productService.getProducts();
    });
  }

  onAddProduct(form) {
   // this.products.push(this.productName);
    if (form.valid) {
     // this.products.push(form.value.productName);
      this.productService.addProduct(form.value.productName);
    }
  }

  onRemoveProduct(productName: string) {
    this.products = this.products.filter(p => p !== productName);
  }

  ngOnDestroy() {
    this.productSubscription.unsubscribe();
  }
}
