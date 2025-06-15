import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { RedHighlightDirective } from "../directives/red-highlight.directive";



@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
  imports: [RouterModule, RedHighlightDirective],
})
export class NavBarComponent {}
