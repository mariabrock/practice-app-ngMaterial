import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  recentData: string[] = ['Document', 'Data', 'More Data', 'Document 2', 'Document 3',
  'A Third Batch of Data', 'This is Cheese', 'Goat Emmental Roquefort'];

  constructor() { }

  ngOnInit(): void {
  }

}
