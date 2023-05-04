import { Injectable } from '@angular/core';

export interface items {
  title: string;
  image: string;
  description: string;
  price: number;
  type: string;
}

@Injectable({
  providedIn: 'root'
})
export class ItemsnService {
  
  itemsOnStock:items[] = [
    {
      title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image:"../assets/items/sword.jpg",
      type:"Miecze",
      price:499,
    },{
      title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image:"../assets/items/axe.jpg",
      type:"Topory",
      price:330,
    },{
      title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image:"../assets/items/bow.jpg",
      type:"Łuki",
      price:879,
    },{
      title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image:"../assets/items/helmet.jpg",
      type:"Hełmy",
      price:500,
    },{
      title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image:"../assets/items/armor.jpg",
      type:"Zbroje",
      price:340,
    },{
      title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image:"../assets/items/shield.jpg",
      type:"Tarcze",
      price:420,
    },{
      title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image:"../assets/items/helmet2.jpg",
      type:"Hełmy",
      price: 220,
    },
  ];
  constructor() { 
  }

  returnItems(){
    return this.itemsOnStock;
  }

  returnRecentItems(){
    return this.itemsOnStock.slice(0, 2);
  }
}
