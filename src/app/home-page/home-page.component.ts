import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  @ViewChild('heroPage') heroPage!:ElementRef;
  cart = faCartShopping;
  currentUrl:string = '';
  clickedBtn:boolean = false;

  constructor(private router:Router,
              private Renderer:Renderer2) { }
  
  ngOnInit(): void {
    this.currentUrl = this.router.url;
  } 
  //Knight size Up
  showKnight(){
    this.Renderer.setStyle(this.heroPage.nativeElement, 'backgroundSize', '220% 250%');
    this.Renderer.setStyle(this.heroPage.nativeElement, 'backgroundPosition', 'top');
  }
  //Push knight back
  backKnight(){
    this.Renderer.setStyle(this.heroPage.nativeElement, 'backgroundSize', '100% 100%');
  }

  clickBtn(){
    this.clickedBtn = !this.clickedBtn;
  }

  checkOffer(){
    this.Renderer.setStyle(this.heroPage.nativeElement, 'backgroundSize', '100% 100%');
    setTimeout(() => { window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" }) }, 200);
    setTimeout(() => {this.router.navigateByUrl('shop') }, 1500);

  }
}
