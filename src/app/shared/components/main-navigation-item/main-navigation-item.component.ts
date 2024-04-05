import {Component, Input} from '@angular/core';
import {NgClass, UpperCasePipe} from '@angular/common';
import {NavigationEnd, RouterLink, RouterLinkActive} from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-navigation-item',
  standalone: true,
  imports: [UpperCasePipe, RouterLink, RouterLinkActive, NgClass],
  templateUrl: './main-navigation-item.component.html',
  styleUrl: './main-navigation-item.component.scss'
})
export class MainNavigationItemComponent {
  @Input() title!: string;
  @Input() path!: string;
  isActive: boolean = false;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) { // Check for NavigationEnd event
        this.updateIsActive();
      }
    });
  }

  updateIsActive() {
    console.log("#router", this.router.url, this.path);
    this.isActive = this.router.url === `/${this.path}`;
  }
}
