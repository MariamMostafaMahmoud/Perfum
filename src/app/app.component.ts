import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { HomeComponent } from "./home/home.component";
import { CollectionComponent } from "./collection/collection.component";
import { PopularComponent } from "./popular/popular.component";
import { AboutComponent } from "./about/about.component";
import { BannerComponent } from "./banner/banner.component";
import { FooterComponent } from "./footer/footer.component";
import { AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, HomeComponent, CollectionComponent, PopularComponent, AboutComponent, BannerComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tailwindApp';
  constructor(@Inject(PLATFORM_ID) private platformId: any) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId) && window.location.hash) {
      setTimeout(() => {
        const element = document.querySelector(window.location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 0);
    }
  }
}
