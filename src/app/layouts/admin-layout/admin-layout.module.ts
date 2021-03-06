import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';

import { DashboardComponent } from '../../Modules/Admin-Module/dashboard/dashboard.component';
import { UserProfileComponent } from '../../Modules/Admin-Module/user-profile/user-profile.component';
import { TableListComponent } from '../../Modules/Admin-Module/table-list/table-list.component';
import { TypographyComponent } from '../../Modules/Admin-Module/typography/typography.component';
import { MapsComponent } from '../../Modules/Admin-Module/maps/maps.component';
import { IconsComponent } from '../../Modules/Admin-Module/icons/icons.component';
import { UpgradeComponent } from '../../Modules/Admin-Module/upgrade/upgrade.component';
import { NotificationsComponent } from 'app/shared-components/notifications/notifications.component';

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule
} from '@angular/material';
import { AdminNotificationsComponent } from 'app/Modules/Admin-Module/admin-notifications/admin-notifications.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    AdminNotificationsComponent,
    UpgradeComponent,
  ]
})

export class AdminLayoutModule {}
