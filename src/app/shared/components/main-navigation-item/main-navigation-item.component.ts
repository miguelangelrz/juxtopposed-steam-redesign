import { Component, Input } from '@angular/core'
import { UpperCasePipe } from '@angular/common'
import { RouterLink, RouterLinkActive } from '@angular/router'

@Component({
    selector: 'app-main-navigation-item',
    standalone: true,
    imports: [UpperCasePipe, RouterLink, RouterLinkActive],
    templateUrl: './main-navigation-item.component.html',
    styleUrl: './main-navigation-item.component.scss',
})
export class MainNavigationItemComponent {
    @Input() title!: string
    @Input() path!: string
}
