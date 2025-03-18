import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';


export interface Item {
  id: string;
  item: string;
  description?: string;
}


@Component({
  selector: 'app-shopping-cart',
  imports: [CommonModule],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css'
})
export class ShoppingCartComponent {
  cart = [
    {id: '1', item: 'banana', description: 'something about banana'},
    {id: '2', item: 'orange', description: 'something about orange'},
    {id: '3', item: 'apple', description: 'something about apple'}
  ];

  items = this.cart
  selectedItem = signal<Item | null>(null);

  selectItem(item: Item) {
    this.selectedItem.set(item);
  }
}
