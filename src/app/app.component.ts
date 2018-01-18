import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  values = '';

  onKey(event: any) {
    this.values += event.target.value + ' | ';
    console.log(this.values);
  }
}
