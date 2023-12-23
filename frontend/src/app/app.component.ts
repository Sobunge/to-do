import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FinishedComponent } from "./finished/finished.component";
import { UnfinishedComponent } from "./unfinished/unfinished.component";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, FinishedComponent, UnfinishedComponent, FooterComponent]
})
export class AppComponent {
  title = 'frontend';
  isChecked = false;
}
