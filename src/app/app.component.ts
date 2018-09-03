import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }
  title = 'app';
}
