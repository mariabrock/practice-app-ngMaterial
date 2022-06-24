import { NgModule } from '@angular/core';

import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatInputModule} from '@angular/material/input';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTableModule} from '@angular/material/table';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatBadgeModule} from '@angular/material/badge';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatDialogModule} from "@angular/material/dialog";
import {ClipboardModule} from "@angular/cdk/clipboard";
import {MatProgressBar, MatProgressBarModule} from "@angular/material/progress-bar";
import {MatTabsModule} from "@angular/material/tabs";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatTreeModule} from "@angular/material/tree";
import {MatChipsModule} from "@angular/material/chips";

const MODULES = [
  LayoutModule,
  MatButtonModule,
  MatCardModule,
  MatGridListModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatSidenavModule,
  MatToolbarModule,
  MatSelectModule,
  FlexLayoutModule,
  MatInputModule,
  MatTooltipModule,
  MatCheckboxModule,
  MatTableModule,
  MatButtonToggleModule,
  FormsModule,
  MatExpansionModule,
  MatBadgeModule,
  MatPaginatorModule,
  MatSortModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  ReactiveFormsModule,
  MatSnackBarModule,
  MatSlideToggleModule,
  MatDialogModule,
  ClipboardModule,
  MatProgressBarModule,
  MatTableModule,
  MatTabsModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatTreeModule,
  MatChipsModule
];

@NgModule({
  imports: [...MODULES],
  exports: [...MODULES],
  declarations: [

  ]
})
export class UiMaterialModule {}
