import { Component, OnInit, ViewChild } from '@angular/core';
import { map, shareReplay } from 'rxjs/operators';
import { BreakpointObserver } from "@angular/cdk/layout";
import { Observable } from "rxjs";
import { MatSidenav } from "@angular/material/sidenav";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  @ViewChild('drawer', {static: true}) drawer: MatSidenav | undefined;

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(['(max-width: 850px)'])
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {

    this.isHandset$.subscribe((val) => {
      if(!val) {
        console.log(this.drawer);
        this.drawer?.close();
      }
    });
  }

}
