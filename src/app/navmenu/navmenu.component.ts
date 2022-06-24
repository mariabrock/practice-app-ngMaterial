import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navmenu',
  templateUrl: './navmenu.component.html',
  styleUrls: ['./navmenu.component.scss']
})
export class NavmenuComponent implements OnInit {

  @Input() isHandSet: boolean | null = false;

  public startedExpanded: boolean = false;
  public exploreExpanded: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  expandMenu(id: string): void {
    if(id === 'started') {
      this.startedExpanded = !this.startedExpanded;
    } else {
      this.exploreExpanded = !this.exploreExpanded;
    }
  }

}
