import {Component, ElementRef, ViewChild} from '@angular/core';
import {NgIf, NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [NgOptimizedImage, NgIf],
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.scss'
})
export class BadgeComponent {
  popupTop: number = 0;
  popupLeft: number = 0;
  showPopup: boolean = false;

  @ViewChild('popupToggleButton')
  buttonRef?: ElementRef;

  togglePopup() {
    this.showPopup = !this.showPopup;
    if (this.showPopup && this.buttonRef) {
      const buttonRect = this.buttonRef.nativeElement.getBoundingClientRect();
      this.popupTop = buttonRect.top+50;
      this.popupLeft = buttonRect.left;
    }

  }
}
