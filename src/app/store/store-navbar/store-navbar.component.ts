import { Component } from '@angular/core';
import {NgForOf, NgOptimizedImage} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-store-navbar',
  standalone: true,
  imports: [NgForOf, RouterLink, NgOptimizedImage],
  templateUrl: './store-navbar.component.html',
  styleUrl: './store-navbar.component.scss',
})
export class StoreNavbarComponent {
  menuOptions = [
    { route: 'home', title: 'Home' },
    { route: 'browse', title: 'Title' },
    { route: 'discover', title: 'Discover' },
    { route: 'points', title: 'Points Shop' },
    { route: 'curators', title: 'Curators' },
    { route: 'gift', title: 'Gift Cards' },
    { route: 'news', title: 'News' },
  ];
  activeRoute: string = 'home';

  toggleView(route: string) {
    this.activeRoute = route;
  }
}
