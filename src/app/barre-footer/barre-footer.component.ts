import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barre-footer',
  templateUrl: './barre-footer.component.html',
  styleUrls: ['./barre-footer.component.css']
})
export class BarreFooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  pjson = require('../../../package.json');
}

