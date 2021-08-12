import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EvenEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.ccomponent.css']
})
export class ProductAlertsComponent implements OnInit {
  @Input() product!: Product;
  @Output() notify = new EvenEmitter();
  constructor() {}
  ngOnInit() {}
}
