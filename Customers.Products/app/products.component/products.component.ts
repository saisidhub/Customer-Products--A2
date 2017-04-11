/// <reference path="../services/products.services.ts" />

import { Component } from "@angular/core";
import { ProductService } from '../services/products.services';

@Component({
    selector: 'of-product',
    templateUrl: './app/customers.component/customers.component.html',
    styleUrls: ['./app/customers.component/customers.component.css'],
    providers: [ProductService]

})
export class ProductsComponent {
    private products: any[];

    constructor(private _productService: ProductService) {

    }

    ngOnInit() {
        this.getallproducts();

    }
    getallproducts() {
        this._productService.getallproducts().subscribe(
            response => this.products = response,
            error => console.error(error),
            () => console.info(this.products)
        );

    }

}
