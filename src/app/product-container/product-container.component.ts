import { Component } from '@angular/core';
import { ProductComponent } from "../product/product.component";
import { Product } from '../modals/product';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-product-container',
  imports: [ProductComponent, NgFor],
  templateUrl: './product-container.component.html',
  styleUrl: './product-container.component.scss',
})
export class ProductContainerComponent {
  yellow: Product = {
    price: 1000.0,
    productName: 'Nike Air Max 90',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, quos',
    stockCount: 1,
    imgUrl:
      'https://cdn.pixabay.com/photo/2020/10/11/05/36/nike-5644799_1280.jpg',
  };

  productList: Product[] = [
    {
      price: 1,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, quos',
      stockCount: 10,
      productName: ' Sample 1',
      imgUrl:
        'https://cdn.pixabay.com/photo/2016/11/19/18/06/feet-1840619_1280.jpg',
    },
    {
      price: 2,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, quos',
      stockCount: 5,
      productName: 'Sample  2',
      imgUrl:
        'https://cdn.pixabay.com/photo/2020/10/11/05/36/nike-5644799_1280.jpg',
    },
    {
      price: 23,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, quos',
      stockCount: 0,
      productName: 'Sample  3',
      imgUrl:
        'https://cdn.pixabay.com/photo/2020/09/17/06/28/sneakers-5578127_1280.jpg',
    },
    {
      price: 2,
     description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, quos',
      stockCount: 5,
      productName: 'Sample Product 4',
      imgUrl:
        'https://cdn.pixabay.com/photo/2024/03/19/20/30/ai-generated-8644084_1280.png',
    },
    {
      price: 2,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, quos',
      stockCount: 5,
      productName: 'Sample Product 5',
      imgUrl:
        'https://cdn.pixabay.com/photo/2020/05/27/07/41/nike-5226091_1280.jpg',
    },
  ];

productOutPutEvent(product: Product) {
  console.log(product);
}

}
