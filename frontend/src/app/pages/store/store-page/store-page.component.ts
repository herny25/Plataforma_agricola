import { Component } from '@angular/core';

@Component({
  selector: 'app-store-page',
  templateUrl: './store-page.component.html',
  styleUrls: ['./store-page.component.css']
})
export class StorePageComponent {
  products = [
    { name: 'NomProdct', description: 'Lorem ipsum dolor sit amet consectetur. Egestas semper amet donec vestibulum amet.' },
    { name: 'NomProdct', description: 'Lorem ipsum dolor sit amet consectetur. Egestas semper amet donec vestibulum amet.' },
    { name: 'NomProdct', description: 'Lorem ipsum dolor sit amet consectetur. Egestas semper amet donec vestibulum amet.' },
    { name: 'NomProdct', description: 'Lorem ipsum dolor sit amet consectetur. Egestas semper amet donec vestibulum amet.' },
    { name: 'NomProdct', description: 'Lorem ipsum dolor sit amet consectetur. Egestas semper amet donec vestibulum amet.' },
    { name: 'NomProdct', description: 'Lorem ipsum dolor sit amet consectetur. Egestas semper amet donec vestibulum amet.' },
  ];
}
