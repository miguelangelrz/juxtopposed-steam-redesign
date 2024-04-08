import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-user-status',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './user-status.component.html',
  styleUrl: './user-status.component.scss',
})
export class UserStatusComponent {
  @Input() isHighlighted: boolean = false;
}
