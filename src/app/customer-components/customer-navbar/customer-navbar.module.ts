import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatListModule, MatNavList, MatToolbarModule, MatIconModule, MatButtonModule, MatSidenavModule } from '@angular/material';
import { NgbModule, NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomerNavbarComponent } from './customer-navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatListModule,
    NgbModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    NgbCollapseModule
  ],
  declarations: [
    CustomerNavbarComponent
  ],
  exports: [
    CustomerNavbarComponent
  ]
})
export class CustomerNavbarModule { }
