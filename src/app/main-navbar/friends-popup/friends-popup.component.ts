import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {UserStatusComponent} from '../user-status/user-status.component';

@Component({
  selector: 'app-friends-popup',
  standalone: true,
  imports: [NgOptimizedImage, UserStatusComponent],
  templateUrl: './friends-popup.component.html',
  styleUrl: './friends-popup.component.scss',
})
export class FriendsPopupComponent {}
