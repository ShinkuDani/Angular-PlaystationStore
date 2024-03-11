import { Component } from '@angular/core';
import { MenuBarItemComponent } from "./menu-bar-item/menu-bar-item.component";

@Component({
    selector: 'app-menu-bar',
    standalone: true,
    templateUrl: './menu-bar.component.html',
    styleUrl: './menu-bar.component.css',
    imports: [MenuBarItemComponent]
})
export class MenuBarComponent {

}
