import { Component } from '@angular/core'
import { MainNavigationItemComponent } from '../main-navigation-item/main-navigation-item.component'

@Component({
    selector: 'app-main-navbar',
    standalone: true,
    imports: [MainNavigationItemComponent],
    templateUrl: './main-navbar.component.html',
    styleUrl: './main-navbar.component.scss',
})
export class MainNavbarComponent {}
