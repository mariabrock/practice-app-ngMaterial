import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  cheeseData: string[] = ['Manchego', 'Lancashire', 'Pecorino', 'Jarlsberg', 'Roquefort',
  'Mascarpone', 'Monterey Jack', 'Paneer'];

  searchResults: string[] = ['Manchego', 'Lancashire', 'Pecorino', 'Jarlsberg', 'Roquefort',
  'Mascarpone', 'Monterey Jack', 'Paneer'];

  constructor() { }

  ngOnInit(): void {
  }

}
