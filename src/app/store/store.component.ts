import { Component } from '@angular/core';
import {StoreNavbarComponent} from './store-navbar/store-navbar.component';

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [StoreNavbarComponent],
  templateUrl: './store.component.html',
  styleUrl: './store.component.scss',
})
export class StoreComponent {}
