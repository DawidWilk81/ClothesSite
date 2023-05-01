import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  urlNow:string = '';
  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
    console.log('URL: ', this.router.url);
    this.urlNow = this.router.url;
  }

  change(where:string){
    this.router.navigateByUrl(where);
  }

}
