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
  check:any;
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
    this.filteredItems = this.items;
    window.scrollTo(0, 0);
  }

  ngOnInit(): void {
    console.table(this.items);
  }

  // Component Functions

  filterArray(array:any[], value:string) {
    console.table(array.filter(item => item.type.includes(value)))
    console.log('sse', value.trim())
    return array.filter(item => item.type.includes(value.trim()));
  }

  filter($e:any){
    this.check = $e.target.innerHTML;
    console.log(typeof this.check)
    if(this.check == 'Wszystko '){
      console.log('rESSESE');
      this.filteredItems = this._itemsService.returnItems();
    }else if($e.target.innerHTML != 'Wszystko'){
      console.log('target:', typeof(this.check))
      this.filteredItems = this.filterArray(this.items, this.check);
    }
    console.log($e.target.innerHTML);
  }
}
