import {Component} from '@angular/core';
import {MainNavigationItemComponent} from './main-navigation-item/main-navigation-item.component';
import {NgOptimizedImage} from '@angular/common';
import {BadgeComponent} from './badge/badge.component';
import {NotificationsPopupComponent} from './notifications-popup/notifications-popup.component';
import {FriendsPopupComponent} from './friends-popup/friends-popup.component';

@Component({
  selector: 'app-main-navbar',
  standalone: true,
  imports: [MainNavigationItemComponent, NgOptimizedImage, BadgeComponent, NotificationsPopupComponent, FriendsPopupComponent],
  templateUrl: './main-navbar.component.html',
  styleUrl: './main-navbar.component.scss'
})
export class MainNavbarComponent {
}
