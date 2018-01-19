import { Component } from '@angular/core';

import {MatAutocomplete} from '@angular/material'
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  templateControl: FormControl = new FormControl();
  
  templates = [
    'Java',
    'Javascript',
    'C#'
  ];

  extensions = [
    {value: 'txt', viewValue: '.txt'},
    {value: 'asciii-doc', viewValue: '.ascii-doc'},
    {value: 'markdown', viewValue: '.md'}
  ];

  filteredOptions: Observable<string[]>;

  ngOnInit() {
    this.filteredOptions = this.templateControl.valueChanges
      .pipe(
        startWith(''),
        map(val => this.filter(val))
      );
  }

  filter(val: string): string[] {
    return this.templates.filter(option =>
      option.toLowerCase().indexOf(val.toLowerCase()) === 0);
  }
}
