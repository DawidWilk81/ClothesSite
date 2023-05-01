import { Component, OnInit } from '@angular/core';
import { ItemsnService } from '../itemsn.service';
export interface menu{
  title:string,
  image:string,
}
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  items:any;
  filteredItems:any = [];
  menuValues:menu[] = [
    {title:"Miecze",image:'../../assets/zE4S5G01.svg'},
    {title:"Hełmy",image:'../../assets/hgFYrM01.svg'},
    {title:"Zbroje",image:'../../assets/breastPlate.svg'},
    {title:"Łuki",image:'../../assets/bow.svg'},
    {title:"Topory",image:'../../assets/axe.svg'},
    {title:"Tarcze",image:'../../assets/shield.svg'},
  ]

  constructor(
    private _itemsService:ItemsnService
  ) { 
    this.items = this._itemsService.returnItems();
    window.scrollTo(0, 0);
  }

  ngOnInit(): void {

    console.table(this.items);
  }

  // Component Functions

  filterArray(array: any[], value:string) {
    return array.filter(item => item.type.includes(value));
  }

  filter($e:any){
    let check  = $e.target.innerHTML;
    if($e.target.innerHTML === 'Wszystko'){
      console.log('wsio');
    }else if($e.target.innerHTML != 'Wszystko'){
      this.filteredItems = this.filterArray(this.items, check);
    }
    console.log($e.target.innerHTML);
  }
}
