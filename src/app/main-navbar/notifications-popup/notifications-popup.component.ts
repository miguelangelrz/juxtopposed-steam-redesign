import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-notifications-popup',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './notifications-popup.component.html',
  styleUrl: './notifications-popup.component.scss'
})
export class NotificationsPopupComponent {

}
